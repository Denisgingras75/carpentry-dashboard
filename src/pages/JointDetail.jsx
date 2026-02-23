import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { usePracticeLogs, useCreatePracticeLog } from '../hooks/usePracticeLogs'
import { getJointBySlug } from '../data/joints'
import { getWoodBySlug } from '../data/woods'
import techniques from '../data/techniques'
import FitRating from '../components/FitRating'

function GapMeter({ tolerance }) {
  // Visual gap tolerance guide
  return (
    <div className="surface-inset p-3 flex flex-col gap-2">
      <span
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
      >
        Gap Tolerance
      </span>
      <div className="flex flex-col gap-1.5">
        {[
          { label: 'Ideal', value: tolerance.ideal, color: 'var(--color-success)' },
          { label: 'Good', value: tolerance.good, color: 'var(--color-accent)' },
          { label: 'Acceptable', value: tolerance.acceptable, color: 'var(--color-warning)' },
        ].map(t => (
          <div key={t.label} className="flex items-center gap-2">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: t.color,
                flexShrink: 0,
              }}
            />
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)', minWidth: 70 }}>
              {t.label}
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
              ≤ {t.value}mm
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DifficultyBadge({ level }) {
  const labels = ['', 'Beginner', 'Easy', 'Intermediate', 'Advanced', 'Expert']
  const colors = ['', 'var(--color-success)', 'var(--color-success)', 'var(--color-accent)', 'var(--color-danger)', 'var(--color-danger)']
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{
        color: colors[level],
        background: level <= 2 ? 'var(--color-success-soft)' : level <= 3 ? 'var(--color-accent-soft)' : 'var(--color-danger-soft)',
      }}
    >
      {labels[level]} ({level}/5)
    </span>
  )
}

export default function JointDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { user, signIn } = useAuth()
  const joint = getJointBySlug(slug)
  const { logs } = usePracticeLogs(user?.id)
  const createLog = useCreatePracticeLog()

  const [showLogForm, setShowLogForm] = useState(false)
  const [gapMm, setGapMm] = useState('')
  const [fitRating, setFitRating] = useState(0)
  const [notes, setNotes] = useState('')

  if (!joint) {
    return (
      <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
        Joint not found.{' '}
        <Link to="/" style={{ color: 'var(--color-accent)' }}>Back to Library</Link>
      </div>
    )
  }

  // Filter practice logs for THIS joint
  const myLogs = logs.filter(l => l.joint_type === joint.name)
  const myGaps = myLogs.filter(l => l.gap_mm != null)
  const avgGap = myGaps.length > 0
    ? (myGaps.reduce((s, l) => s + l.gap_mm, 0) / myGaps.length).toFixed(1)
    : null
  const myFits = myLogs.filter(l => l.fit_rating != null)
  const avgFit = myFits.length > 0
    ? (myFits.reduce((s, l) => s + l.fit_rating, 0) / myFits.length).toFixed(1)
    : null

  async function handleLog(e) {
    e.preventDefault()
    if (!user) { signIn(); return }

    try {
      await createLog.mutateAsync({
        userId: user.id,
        data: {
          joint_type: joint.name,
          gap_mm: gapMm ? parseFloat(gapMm) : null,
          fit_rating: fitRating || null,
          notes: notes || null,
          session_date: new Date().toISOString().split('T')[0],
        }
      })
      toast.success('Logged', { description: `${joint.name}${fitRating ? ` · ${fitRating}/5` : ''}` })
      setShowLogForm(false)
      setGapMm('')
      setFitRating(0)
      setNotes('')
    } catch {
      toast.error('Failed to save')
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      {/* Back */}
      <button
        className="btn-ghost self-start"
        onClick={() => navigate('/')}
        style={{ marginLeft: -8 }}
      >
        ← Library
      </button>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1
            className="font-display"
            style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
          >
            {joint.name}
          </h1>
          <DifficultyBadge level={joint.difficulty} />
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {joint.summary}
        </p>
      </div>

      {/* My Stats — only if they have data */}
      {myLogs.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          <div className="surface-inset p-3 text-center">
            <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{myLogs.length}</div>
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Logged</div>
          </div>
          <div className="surface-inset p-3 text-center">
            <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{avgGap ? `${avgGap}mm` : '—'}</div>
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Avg Gap</div>
          </div>
          <div className="surface-inset p-3 text-center">
            <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{avgFit ? `${avgFit}/5` : '—'}</div>
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Avg Fit</div>
          </div>
        </div>
      )}

      {/* Log Experience button / form */}
      {!showLogForm ? (
        <button
          className="btn-primary w-full"
          onClick={() => {
            if (!user) { signIn(); return }
            setShowLogForm(true)
          }}
        >
          + Log My Experience
        </button>
      ) : (
        <form onSubmit={handleLog} className="card p-4 flex flex-col gap-3 animate-in">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">{joint.name}</span>
            <button type="button" className="btn-ghost text-xs" onClick={() => setShowLogForm(false)}>Cancel</button>
          </div>
          <div className="flex gap-3">
            <div style={{ flex: '0 0 120px' }}>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-text-tertiary)' }}>Gap</label>
              <div style={{ position: 'relative' }}>
                <input type="number" className="input" placeholder="0.0" value={gapMm} onChange={e => setGapMm(e.target.value)} step="0.1" min="0" style={{ paddingRight: 36 }} />
                <span className="text-xs font-medium" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }}>mm</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-text-tertiary)' }}>Fit</label>
              <FitRating value={fitRating} onChange={setFitRating} size="lg" />
            </div>
          </div>
          <input type="text" className="input" placeholder="What did you learn?" value={notes} onChange={e => setNotes(e.target.value)} />
          <button type="submit" className="btn-primary" disabled={createLog.isPending}>
            {createLog.isPending ? 'Saving...' : 'Log It'}
          </button>
        </form>
      )}

      {/* Knowledge: Full Description */}
      <div className="card p-4">
        <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
          About This Joint
        </h2>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
          {joint.description}
        </div>
      </div>

      {/* YouTube Videos */}
      {joint.videos && joint.videos.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Watch & Learn
          </h2>
          <div className="flex flex-col gap-3">
            {joint.videos.map(v => (
              <div key={v.id} className="card overflow-hidden">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </div>
                <div className="p-3">
                  <div className="font-medium text-sm">{v.title}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{v.channel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gap Tolerance */}
      {joint.gapTolerance && <GapMeter tolerance={joint.gapTolerance} />}

      {/* Common Mistakes */}
      {joint.commonMistakes && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Common Mistakes
          </h2>
          <ul className="flex flex-col gap-2">
            {joint.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-danger)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tips */}
      {joint.tips && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Tips
          </h2>
          <ul className="flex flex-col gap-2">
            {joint.tips.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-success)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Techniques Used */}
      {(() => {
        const jointTechniques = techniques.filter(t => t.usedInJoints.includes(slug))
        if (jointTechniques.length === 0) return null
        return (
          <div>
            <h2
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Techniques You'll Use
            </h2>
            <div className="flex flex-col gap-1.5">
              {jointTechniques.map(tech => (
                <Link
                  key={tech.slug}
                  to={`/technique/${tech.slug}`}
                  className="card-accent flex items-center justify-between py-2.5 px-3"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div>
                    <div className="font-medium text-sm">{tech.name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{tech.summary.split('.')[0]}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-tertiary)', opacity: 0.5, flexShrink: 0 }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )
      })()}

      {/* Timber Frame Notes */}
      {joint.timberFrameNotes && (
        <div className="card-accent p-4">
          <h2 className="font-display mb-1" style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
            Timber Frame Notes
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {joint.timberFrameNotes}
          </p>
        </div>
      )}

      {/* Best Woods */}
      {joint.bestWoods && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Best Wood Species
          </h2>
          <div className="flex flex-wrap gap-2">
            {joint.bestWoods.map(w => {
              const woodSlug = w.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={w}
                  to={`/wood/${woodSlug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {w}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Applications */}
      {joint.applications && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Common Applications
          </h2>
          <div className="flex flex-wrap gap-2">
            {joint.applications.map(a => (
              <span key={a} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related Joints */}
      {joint.relatedJoints && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Joints
          </h2>
          <div className="flex flex-wrap gap-2">
            {joint.relatedJoints.map(slug => (
              <Link
                key={slug}
                to={`/joint/${slug}`}
                className="chip"
                style={{ textDecoration: 'none' }}
              >
                {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* My Practice History */}
      {myLogs.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            My Practice ({myLogs.length} entries)
          </h2>
          <div className="flex flex-col gap-1.5">
            {myLogs.slice(0, 10).map(log => (
              <Link
                key={log.id}
                to={`/log/${log.id}`}
                className="card-accent flex items-center justify-between py-2.5 px-3"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                    {new Date(log.session_date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  {log.wood_species && (
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      {log.wood_species}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2.5">
                  {log.gap_mm != null && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
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
    </div>
  )
}
