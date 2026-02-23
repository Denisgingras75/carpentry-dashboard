import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { usePracticeLogs, useCreatePracticeLog } from '../hooks/usePracticeLogs'
import { JOINT_TYPES, WOOD_SPECIES } from '../lib/constants'
import FitRating from '../components/FitRating'
import EmptyState from '../components/EmptyState'

export default function PracticeLog() {
  const { user, signIn } = useAuth()
  const { logs, loading } = usePracticeLogs(user?.id)
  const createLog = useCreatePracticeLog()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    joint_type: '',
    wood_species: '',
    gap_mm: '',
    fit_rating: 0,
    notes: '',
    session_date: new Date().toISOString().split('T')[0],
    duration_minutes: '',
  })

  function updateForm(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!form.joint_type) { toast.error('Pick a joint type'); return }

    try {
      await createLog.mutateAsync({
        userId: user.id,
        data: {
          joint_type: form.joint_type,
          wood_species: form.wood_species || null,
          gap_mm: form.gap_mm ? parseFloat(form.gap_mm) : null,
          fit_rating: form.fit_rating || null,
          notes: form.notes || null,
          session_date: form.session_date,
          duration_minutes: form.duration_minutes ? parseInt(form.duration_minutes) : null,
        }
      })
      toast.success('Joint logged!')
      setShowForm(false)
      setForm({
        joint_type: '', wood_species: '', gap_mm: '', fit_rating: 0,
        notes: '', session_date: new Date().toISOString().split('T')[0], duration_minutes: '',
      })
    } catch {
      toast.error('Failed to save')
    }
  }

  // Group logs by date
  const grouped = {}
  for (const log of logs) {
    const date = log.session_date
    if (!grouped[date]) grouped[date] = []
    grouped[date].push(log)
  }
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>
          Practice Log
        </h1>
        <button className="btn-primary text-sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ New Entry'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 flex flex-col gap-3 animate-in">
          <select className="input" value={form.joint_type} onChange={e => updateForm('joint_type', e.target.value)}>
            <option value="">Joint type *</option>
            {JOINT_TYPES.map(j => <option key={j} value={j}>{j}</option>)}
          </select>

          <select className="input" value={form.wood_species} onChange={e => updateForm('wood_species', e.target.value)}>
            <option value="">Wood species</option>
            {WOOD_SPECIES.map(w => <option key={w} value={w}>{w}</option>)}
          </select>

          <div className="flex gap-3">
            <input
              type="number" className="input" placeholder="Gap (mm)" step="0.1" min="0"
              value={form.gap_mm} onChange={e => updateForm('gap_mm', e.target.value)}
              style={{ flex: 1 }}
            />
            <input
              type="number" className="input" placeholder="Duration (min)" min="0"
              value={form.duration_minutes} onChange={e => updateForm('duration_minutes', e.target.value)}
              style={{ flex: 1 }}
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Fit Rating:</span>
            <FitRating value={form.fit_rating} onChange={v => updateForm('fit_rating', v)} />
          </div>

          <input
            type="date" className="input"
            value={form.session_date} onChange={e => updateForm('session_date', e.target.value)}
          />

          <textarea
            className="input" placeholder="Notes..."
            value={form.notes} onChange={e => updateForm('notes', e.target.value)}
          />

          <button type="submit" className="btn-primary" disabled={createLog.isPending}>
            {createLog.isPending ? 'Saving...' : 'Save Entry'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="py-12 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
      ) : logs.length === 0 ? (
        <EmptyState
          icon="🪚"
          title="Your ledger is empty"
          description="Every joint tells a story. Log your first one from the Shop page, or tap + New Entry above."
        />
      ) : (
        dates.map(date => (
          <div key={date}>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-2 mt-2"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              {new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </h3>
            <div className="flex flex-col gap-2">
              {grouped[date].map(log => (
                <Link
                  key={log.id}
                  to={`/log/${log.id}`}
                  className="card-accent flex items-center justify-between p-3"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div>
                    <div className="font-medium text-sm">{log.joint_type}</div>
                    {log.wood_species && (
                      <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{log.wood_species}</div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {log.gap_mm != null && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                        {log.gap_mm}mm
                      </span>
                    )}
                    {log.fit_rating && <FitRating value={log.fit_rating} readOnly />}
                    {log.duration_minutes && (
                      <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                        {log.duration_minutes}m
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
