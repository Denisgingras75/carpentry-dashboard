import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { useCreatePracticeLog } from '../hooks/usePracticeLogs'
import { usePracticeLogs } from '../hooks/usePracticeLogs'
import { useChecklistItems, useChecklistCompletions, useToggleCompletion } from '../hooks/useChecklist'
import { JOINT_TYPES } from '../lib/constants'
import FitRating from '../components/FitRating'

function getWeekStart() {
  const now = new Date()
  const day = now.getDay()
  const diff = now.getDate() - day + (day === 0 ? -6 : 1)
  const monday = new Date(now.setDate(diff))
  return monday.toISOString().split('T')[0]
}

export default function Dashboard() {
  const { user, signIn } = useAuth()
  const { logs } = usePracticeLogs(user?.id)
  const { items: checklistItems } = useChecklistItems(user?.id)
  const weekOf = getWeekStart()
  const { completions } = useChecklistCompletions(user?.id, weekOf)
  const toggleCompletion = useToggleCompletion()
  const createLog = useCreatePracticeLog()

  const [jointType, setJointType] = useState('')
  const [gapMm, setGapMm] = useState('')
  const [fitRating, setFitRating] = useState(0)
  const [notes, setNotes] = useState('')

  const recentLogs = logs.slice(0, 5)
  const thisWeekLogs = logs.filter(l => l.session_date >= weekOf)
  const completedIds = new Set(completions.map(c => c.checklist_item_id))

  async function handleQuickLog(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!jointType) { toast.error('Pick a joint type'); return }

    try {
      await createLog.mutateAsync({
        userId: user.id,
        data: {
          joint_type: jointType,
          gap_mm: gapMm ? parseFloat(gapMm) : null,
          fit_rating: fitRating || null,
          notes: notes || null,
          session_date: new Date().toISOString().split('T')[0],
        }
      })
      toast.success('Joint logged!')
      setJointType('')
      setGapMm('')
      setFitRating(0)
      setNotes('')
    } catch {
      toast.error('Failed to save log')
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Workshop</h1>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          {thisWeekLogs.length} joints this week
        </p>
      </div>

      {/* Quick Log */}
      <form onSubmit={handleQuickLog} className="card p-4 flex flex-col gap-3">
        <h2 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
          Quick Log
        </h2>

        <select
          className="input"
          value={jointType}
          onChange={e => setJointType(e.target.value)}
        >
          <option value="">Joint type...</option>
          {JOINT_TYPES.map(j => <option key={j} value={j}>{j}</option>)}
        </select>

        <div className="flex gap-3">
          <input
            type="number"
            className="input"
            placeholder="Gap (mm)"
            value={gapMm}
            onChange={e => setGapMm(e.target.value)}
            step="0.1"
            min="0"
            style={{ flex: 1 }}
          />
          <div className="flex items-center gap-2" style={{ flex: 1 }}>
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Fit:</span>
            <FitRating value={fitRating} onChange={setFitRating} />
          </div>
        </div>

        <input
          type="text"
          className="input"
          placeholder="Quick note..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />

        <button
          type="submit"
          className="btn-primary w-full"
          disabled={createLog.isPending}
        >
          {createLog.isPending ? 'Saving...' : 'Log Joint'}
        </button>
      </form>

      {/* Weekly Checklist Preview */}
      {checklistItems.length > 0 && (
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
              This Week
            </h2>
            <Link to="/checklist" className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              View all
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {checklistItems.slice(0, 4).map(item => {
              const done = completedIds.has(item.id)
              return (
                <label key={item.id} className="flex items-center gap-3 cursor-pointer py-1">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => {
                      if (!user) { signIn(); return }
                      toggleCompletion.mutate({ userId: user.id, itemId: item.id, weekOf })
                    }}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: 'var(--color-success)' }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: done ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                      textDecoration: done ? 'line-through' : 'none',
                    }}
                  >
                    {item.title}
                  </span>
                </label>
              )
            })}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
            Recent Joints
          </h2>
          <Link to="/log" className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
            View all
          </Link>
        </div>

        {recentLogs.length === 0 ? (
          <p className="text-sm py-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
            No joints logged yet. Use the form above to start.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {recentLogs.map(log => (
              <Link
                key={log.id}
                to={`/log/${log.id}`}
                className="flex items-center justify-between py-2 px-1 rounded-md"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div>
                  <span className="text-sm font-medium">{log.joint_type}</span>
                  {log.wood_species && (
                    <span className="text-xs ml-2" style={{ color: 'var(--color-text-tertiary)' }}>
                      {log.wood_species}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {log.gap_mm != null && (
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      {log.gap_mm}mm
                    </span>
                  )}
                  {log.fit_rating && <FitRating value={log.fit_rating} readOnly />}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
