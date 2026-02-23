import { useParams, useNavigate, Link } from 'react-router-dom'
import { getWoodBySlug, getHardnessLabel, getWorkabilityLabel } from '../data/woods'
import { getJointBySlug } from '../data/joints'
import projects from '../data/projects-library'

export default function WoodDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const wood = getWoodBySlug(slug)

  if (!wood) {
    return (
      <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
        Species not found.{' '}
        <Link to="/" style={{ color: 'var(--color-accent)' }}>Back to Library</Link>
      </div>
    )
  }

  const hardnessLabel = getHardnessLabel(wood.hardness)
  const workabilityLabel = getWorkabilityLabel(wood.workability)
  const hardnessPct = Math.min((wood.hardness / 2000) * 100, 100)

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
        <h1
          className="font-display"
          style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
        >
          {wood.name}
        </h1>
        <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {wood.summary}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="surface-inset p-3 text-center">
          <div className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{wood.hardness}</div>
          <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Janka</div>
        </div>
        <div className="surface-inset p-3 text-center">
          <div className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{hardnessLabel}</div>
          <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Hardness</div>
        </div>
        <div className="surface-inset p-3 text-center">
          <div className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{workabilityLabel}</div>
          <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Workability</div>
        </div>
      </div>

      {/* Hardness Bar */}
      <div className="surface-inset p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}>
            Janka Hardness Scale
          </span>
          <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {wood.hardness} lbf
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: 8,
            borderRadius: 4,
            background: 'var(--color-border)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${hardnessPct}%`,
              height: '100%',
              borderRadius: 4,
              background: 'var(--color-accent)',
              transition: 'width 0.5s ease-out',
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Soft</span>
          <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Hard</span>
        </div>
      </div>

      {/* Description */}
      <div className="card p-4">
        <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
          About This Wood
        </h2>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
          {wood.description}
        </div>
      </div>

      {/* Grain */}
      {wood.grain && (
        <div className="surface-inset p-3">
          <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}>
            Grain Character
          </span>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{wood.grain}</p>
        </div>
      )}

      {/* Working Notes */}
      {wood.notes && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Working Notes
          </h2>
          <ul className="flex flex-col gap-2">
            {wood.notes.map((n, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Best Joints */}
      {wood.bestJoints && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Best Joints for {wood.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {wood.bestJoints.map(jSlug => {
              const joint = getJointBySlug(jSlug)
              return (
                <Link
                  key={jSlug}
                  to={`/joint/${jSlug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {joint ? joint.name : jSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Projects Using This Wood */}
      {(() => {
        const woodProjects = projects.filter(p => p.woods && p.woods.includes(slug))
        if (woodProjects.length === 0) return null
        return (
          <div>
            <h2
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Projects Using {wood.name}
            </h2>
            <div className="flex flex-col gap-1.5">
              {woodProjects.slice(0, 8).map(p => (
                <Link
                  key={p.slug}
                  to={`/plan/${p.slug}`}
                  className="card-accent flex items-center justify-between py-2.5 px-3"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div>
                    <div className="font-medium text-sm">{p.name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{p.estimatedTime}</div>
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

      {/* Common Uses */}
      {wood.uses && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Common Uses
          </h2>
          <div className="flex flex-wrap gap-2">
            {wood.uses.map(u => (
              <span key={u} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                {u}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
