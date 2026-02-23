import { useParams, useNavigate, Link } from 'react-router-dom'
import { getTechniqueBySlug } from '../data/techniques'
import { getJointBySlug } from '../data/joints'
import projects from '../data/projects-library'

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

export default function TechniqueDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const technique = getTechniqueBySlug(slug)

  if (!technique) {
    return (
      <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
        Technique not found.{' '}
        <Link to="/" style={{ color: 'var(--color-accent)' }}>Back to Library</Link>
      </div>
    )
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
            {technique.name}
          </h1>
          <DifficultyBadge level={technique.difficulty} />
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {technique.summary}
        </p>
      </div>

      {/* YouTube Videos */}
      {technique.videos && technique.videos.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Watch & Learn
          </h2>
          <div className="flex flex-col gap-3">
            {technique.videos.map(v => (
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

      {/* Full Description */}
      <div className="card p-4">
        <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
          The Technique
        </h2>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
          {technique.description}
        </div>
      </div>

      {/* Key Principles */}
      {technique.keyPrinciples && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Key Principles
          </h2>
          <ul className="flex flex-col gap-2">
            {technique.keyPrinciples.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {technique.commonMistakes && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Common Mistakes
          </h2>
          <ul className="flex flex-col gap-2">
            {technique.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-danger)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools Needed */}
      {technique.toolsNeeded && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Tools You'll Need
          </h2>
          <div className="card divide-y" style={{ borderColor: 'var(--color-border-light)' }}>
            {technique.toolsNeeded.map(t => (
              <div key={t.tool} className="p-3">
                <div className="font-medium text-sm">{t.tool}</div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Used In These Joints */}
      {technique.usedInJoints && technique.usedInJoints.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Joints That Use This Technique
          </h2>
          <div className="flex flex-wrap gap-2">
            {technique.usedInJoints.map(slug => {
              const joint = getJointBySlug(slug)
              return (
                <Link
                  key={slug}
                  to={`/joint/${slug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {joint ? joint.name : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Projects Using This Technique */}
      {(() => {
        const techProjects = projects.filter(p => p.skills && p.skills.includes(slug))
        if (techProjects.length === 0) return null
        return (
          <div>
            <h2
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
            >
              Projects That Use This Technique
            </h2>
            <div className="flex flex-col gap-1.5">
              {techProjects.slice(0, 8).map(p => (
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

      {/* Related Techniques */}
      {technique.relatedTechniques && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Techniques
          </h2>
          <div className="flex flex-wrap gap-2">
            {technique.relatedTechniques.map(slug => (
              <Link
                key={slug}
                to={`/technique/${slug}`}
                className="chip"
                style={{ textDecoration: 'none' }}
              >
                {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
