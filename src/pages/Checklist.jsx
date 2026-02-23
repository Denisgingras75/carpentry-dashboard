import { useState } from 'react'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { useChecklistItems, useCreateChecklistItem, useDeleteChecklistItem, useChecklistCompletions, useToggleCompletion } from '../hooks/useChecklist'
import { CHECKLIST_CATEGORIES } from '../lib/constants'
import EmptyState from '../components/EmptyState'

function getWeekStart() {
  const now = new Date()
  const day = now.getDay()
  const diff = now.getDate() - day + (day === 0 ? -6 : 1)
  const monday = new Date(now.setDate(diff))
  return monday.toISOString().split('T')[0]
}

export default function Checklist() {
  const { user, signIn } = useAuth()
  const { items, loading } = useChecklistItems(user?.id)
  const createItem = useCreateChecklistItem()
  const deleteItem = useDeleteChecklistItem()
  const weekOf = getWeekStart()
  const { completions } = useChecklistCompletions(user?.id, weekOf)
  const toggleCompletion = useToggleCompletion()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', category: 'General', is_recurring: true })

  const completedIds = new Set(completions.map(c => c.checklist_item_id))
  const doneCount = items.filter(i => completedIds.has(i.id)).length
  const progress = items.length > 0 ? Math.round((doneCount / items.length) * 100) : 0

  // Group by category
  const grouped = {}
  for (const item of items) {
    const cat = item.category || 'General'
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(item)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!form.title.trim()) { toast.error('Title required'); return }

    try {
      await createItem.mutateAsync({
        userId: user.id,
        data: {
          title: form.title.trim(),
          category: form.category,
          is_recurring: form.is_recurring,
        }
      })
      toast.success('Item added')
      setShowForm(false)
      setForm({ title: '', category: 'General', is_recurring: true })
    } catch {
      toast.error('Failed to add')
    }
  }

  const weekLabel = new Date(weekOf + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>Weekly Checklist</h1>
          <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Week of {weekLabel}</p>
        </div>
        <button className="btn-primary text-sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Item'}
        </button>
      </div>

      {/* Progress */}
      {items.length > 0 && (
        <div className="card p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {doneCount}/{items.length} complete
            </span>
            <span className="text-sm font-bold" style={{ color: progress === 100 ? 'var(--color-success)' : 'var(--color-accent)' }}>
              {progress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: 'var(--color-border-light)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: progress === 100 ? 'var(--color-success)' : 'var(--color-accent)' }} />
          </div>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 flex flex-col gap-3 animate-in">
          <input className="input" placeholder="Checklist item *" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
          <select className="input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
            {CHECKLIST_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <input type="checkbox" checked={form.is_recurring} onChange={e => setForm(f => ({ ...f, is_recurring: e.target.checked }))}
              style={{ accentColor: 'var(--color-primary)' }} />
            Recurring (resets weekly)
          </label>
          <button type="submit" className="btn-primary" disabled={createItem.isPending}>
            {createItem.isPending ? 'Adding...' : 'Add Item'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="py-12 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
      ) : items.length === 0 ? (
        <EmptyState icon="✅" title="Your weekly rhythm" description="Sharpen the chisels, clean the bench, practice a cut. Add the habits that keep the shop running." />
      ) : (
        Object.entries(grouped).map(([category, catItems]) => (
          <div key={category}>
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}>
              {category}
            </h2>
            <div className="card divide-y" style={{ borderColor: 'var(--color-border-light)' }}>
              {catItems.map(item => {
                const done = completedIds.has(item.id)
                return (
                  <div key={item.id} className="flex items-center gap-3 p-3 group">
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => {
                        if (!user) { signIn(); return }
                        toggleCompletion.mutate({ userId: user.id, itemId: item.id, weekOf })
                      }}
                      className="w-4 h-4"
                      style={{ accentColor: 'var(--color-success)' }}
                    />
                    <span className="text-sm flex-1" style={{
                      color: done ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                      textDecoration: done ? 'line-through' : 'none',
                    }}>
                      {item.title}
                    </span>
                    {item.is_recurring && (
                      <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>↻</span>
                    )}
                    <button
                      className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--color-danger)' }}
                      onClick={() => { if (window.confirm('Delete item?')) deleteItem.mutate(item.id) }}
                    >×</button>
                  </div>
                )
              })}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
