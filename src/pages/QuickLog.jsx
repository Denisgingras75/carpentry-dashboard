import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { useCreatePracticeLog, usePracticeLogs } from '../hooks/usePracticeLogs'
import { JOINT_TYPES } from '../lib/constants'
import FitRating from '../components/FitRating'

// Most common joints first for the shop floor
const QUICK_JOINTS = [
  'Mortise & Tenon',
  'Dovetail',
  'Timber Frame Peg',
  'Bridle Joint',
  'Lap Joint',
  'Scarf Joint',
  'Miter',
  'Dado',
  'Box Joint',
]

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
  const createLog = useCreatePracticeLog()

  const [jointType, setJointType] = useState('')
  const [showAllJoints, setShowAllJoints] = useState(false)
  const [gapMm, setGapMm] = useState('')
  const [fitRating, setFitRating] = useState(0)
  const [notes, setNotes] = useState('')

  const weekOf = getWeekStart()
  const thisWeekLogs = logs.filter(l => l.session_date >= weekOf)
  const todayStr = new Date().toISOString().split('T')[0]
  const todayLogs = logs.filter(l => l.session_date === todayStr)

  const displayJoints = showAllJoints ? JOINT_TYPES : QUICK_JOINTS

  async function handleSubmit(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!jointType) { toast.error('Tap a joint type'); return }

    try {
      await createLog.mutateAsync({
        userId: user.id,
        data: {
          joint_type: jointType,
          gap_mm: gapMm ? parseFloat(gapMm) : null,
          fit_rating: fitRating || null,
          notes: notes || null,
          session_date: todayStr,
        }
      })
      toast.success('Logged', {
        description: `${jointType}${fitRating ? ` · ${fitRating}/5` : ''}`,
      })
      setJointType('')
      setGapMm('')
      setFitRating(0)
      setNotes('')
    } catch {
      toast.error('Failed to save')
    }
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-5 pb-4 max-w-lg mx-auto w-full">
      {/* Page Header */}
      <div>
        <h1
          className="font-display"
          style={{
            fontSize: '1.75rem',
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
          }}
        >
          Log a Joint
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          {todayLogs.length > 0
            ? `${todayLogs.length} today · ${thisWeekLogs.length} this week`
            : thisWeekLogs.length > 0
              ? `${thisWeekLogs.length} this week`
              : 'Your workbench is ready'
          }
        </p>
      </div>

      {/* Joint Type Chips */}
      <div>
        <label
          className="text-xs font-semibold uppercase tracking-wider block mb-2.5"
          style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
        >
          Joint
        </label>
        <div className="flex flex-wrap gap-2">
          {displayJoints.map(j => (
            <button
              key={j}
              type="button"
              className={`chip${jointType === j ? ' active' : ''}`}
              onClick={() => setJointType(jointType === j ? '' : j)}
            >
              {j}
            </button>
          ))}
          {!showAllJoints && (
            <button
              type="button"
              className="chip"
              style={{ borderStyle: 'dashed', opacity: 0.7 }}
              onClick={() => setShowAllJoints(true)}
            >
              More...
            </button>
          )}
        </div>
      </div>

      {/* Fit Rating — big dots */}
      <div>
        <label
          className="text-xs font-semibold uppercase tracking-wider block mb-2.5"
          style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
        >
          How'd It Fit?
        </label>
        <FitRating value={fitRating} onChange={setFitRating} size="lg" />
      </div>

      {/* Gap + Note row */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div style={{ flex: '0 0 120px' }}>
            <label
              className="text-xs font-semibold uppercase tracking-wider block mb-1.5"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Gap
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                className="input"
                placeholder="0.0"
                value={gapMm}
                onChange={e => setGapMm(e.target.value)}
                step="0.1"
                min="0"
                style={{ paddingRight: 36 }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-text-tertiary)',
                  pointerEvents: 'none',
                }}
              >
                mm
              </span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label
              className="text-xs font-semibold uppercase tracking-wider block mb-1.5"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Note
            </label>
            <input
              type="text"
              className="input"
              placeholder="Grain was tricky..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="btn-primary w-full"
        disabled={!jointType || createLog.isPending}
        style={{
          padding: '14px 24px',
          fontSize: '1rem',
          marginTop: 4,
        }}
      >
        {createLog.isPending ? 'Saving...' : 'Log It'}
      </button>

      {/* Today's Work — only if there are entries */}
      {todayLogs.length > 0 && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Today
            </span>
            <Link
              to="/log"
              className="text-xs font-medium"
              style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
            >
              All entries
            </Link>
          </div>
          <div className="flex flex-col gap-1.5">
            {todayLogs.slice(0, 4).map(log => (
              <Link
                key={log.id}
                to={`/log/${log.id}`}
                className="card-accent flex items-center justify-between py-2.5 px-3"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="text-sm font-medium">{log.joint_type}</span>
                <div className="flex items-center gap-2.5">
                  {log.gap_mm != null && (
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {log.gap_mm}mm
                    </span>
                  )}
                  {log.fit_rating && <FitRating value={log.fit_rating} readOnly />}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Empty invitation when brand new */}
      {logs.length === 0 && (
        <div
          className="text-center py-8 animate-in"
          style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Tap a joint type above to log your first cut.
            <br />
            Every joint you log builds the picture.
          </p>
        </div>
      )}
    </div>
  )
}
