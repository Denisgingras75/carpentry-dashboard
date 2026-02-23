import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { usePortfolio, useCreatePortfolioItem } from '../hooks/usePortfolio'
import EmptyState from '../components/EmptyState'

export default function Portfolio() {
  const { user, signIn } = useAuth()
  const { items, loading } = usePortfolio(user?.id)
  const createItem = useCreatePortfolioItem()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    title: '', description: '', materials: '', joint_types: '',
    completed_date: '', skill_rating: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!form.title.trim()) { toast.error('Title required'); return }

    try {
      await createItem.mutateAsync({
        userId: user.id,
        data: {
          title: form.title.trim(),
          description: form.description || null,
          materials: form.materials ? form.materials.split(',').map(s => s.trim()).filter(Boolean) : [],
          joint_types: form.joint_types ? form.joint_types.split(',').map(s => s.trim()).filter(Boolean) : [],
          completed_date: form.completed_date || null,
          skill_rating: form.skill_rating ? parseInt(form.skill_rating) : null,
        }
      })
      toast.success('Portfolio item added')
      setShowForm(false)
      setForm({ title: '', description: '', materials: '', joint_types: '', completed_date: '', skill_rating: '' })
    } catch {
      toast.error('Failed to save')
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>Portfolio</h1>
        <button className="btn-primary text-sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ New'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 flex flex-col gap-3 animate-in">
          <input className="input" placeholder="Project title *" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
          <textarea className="input" placeholder="Description..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          <input className="input" placeholder="Materials (comma separated)" value={form.materials} onChange={e => setForm(f => ({ ...f, materials: e.target.value }))} />
          <input className="input" placeholder="Joint types (comma separated)" value={form.joint_types} onChange={e => setForm(f => ({ ...f, joint_types: e.target.value }))} />
          <div className="flex gap-3">
            <input type="date" className="input" value={form.completed_date} onChange={e => setForm(f => ({ ...f, completed_date: e.target.value }))} style={{ flex: 1 }} />
            <input type="number" className="input" placeholder="Skill (1-10)" min="1" max="10"
              value={form.skill_rating} onChange={e => setForm(f => ({ ...f, skill_rating: e.target.value }))} style={{ flex: 1 }} />
          </div>
          <button type="submit" className="btn-primary" disabled={createItem.isPending}>
            {createItem.isPending ? 'Saving...' : 'Add to Portfolio'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="py-12 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
      ) : items.length === 0 ? (
        <EmptyState icon="🏗️" title="Your gallery is empty" description="Finished a build? Add it here. Photos, materials, the joints you used — a record of what your hands made." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map(item => (
            <Link key={item.id} to={`/portfolio/${item.id}`} className="card-accent p-4 flex flex-col gap-2" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              {item.description && (
                <p className="text-xs line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
              )}
              <div className="flex flex-wrap gap-1 mt-auto">
                {(item.materials || []).map(m => (
                  <span key={m} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                    {m}
                  </span>
                ))}
              </div>
              {item.skill_rating && (
                <div className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                  Skill: {item.skill_rating}/10
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
