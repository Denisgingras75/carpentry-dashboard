import { useParams, useNavigate, Link } from 'react-router-dom'
import { getLayoutTopicBySlug } from '../data/layout-knowledge'
import { getTechniqueBySlug } from '../data/techniques'
import { getJointBySlug } from '../data/joints'

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

export default function LayoutTopicDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const topic = getLayoutTopicBySlug(slug)

  if (!topic) {
    return (
      <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
        Layout topic not found.{' '}
        <Link to="/layout" style={{ color: 'var(--color-accent)' }}>Back to Layout Guide</Link>
      </div>
    )
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      {/* Back */}
      <button
        className="btn-ghost self-start"
        onClick={() => navigate('/layout')}
        style={{ marginLeft: -8 }}
      >
        ← Layout Guide
      </button>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1
            className="font-display"
            style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
          >
            {topic.name}
          </h1>
          <DifficultyBadge level={topic.difficulty} />
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {topic.summary}
        </p>
      </div>

      {/* Description */}
      <div className="card p-4">
        <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
          The Method
        </h2>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
          {topic.description}
        </div>
      </div>

      {/* Step by Step */}
      {topic.steps && topic.steps.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Step by Step
          </h2>
          <ol className="flex flex-col gap-2">
            {topic.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Key Principles */}
      {topic.keyPrinciples && topic.keyPrinciples.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Key Principles
          </h2>
          <ul className="flex flex-col gap-2">
            {topic.keyPrinciples.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Common Mistakes
          </h2>
          <ul className="flex flex-col gap-2">
            {topic.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-danger)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools */}
      {topic.tools && topic.tools.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Tools You'll Need
          </h2>
          <div className="card divide-y" style={{ borderColor: 'var(--color-border-light)' }}>
            {topic.tools.map(t => (
              <div key={t.tool} className="p-3">
                <div className="font-medium text-sm">{t.tool}</div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {topic.tips && topic.tips.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Pro Tips
          </h2>
          <ul className="flex flex-col gap-2">
            {topic.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-success)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Joints */}
      {topic.relatedJoints && topic.relatedJoints.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Joints
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.relatedJoints.map(slug => {
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

      {/* Related Techniques */}
      {topic.relatedTechniques && topic.relatedTechniques.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Techniques
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.relatedTechniques.map(slug => {
              const tech = getTechniqueBySlug(slug)
              return (
                <Link
                  key={slug}
                  to={`/technique/${slug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {tech ? tech.name : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Related Topics */}
      {topic.relatedTopics && topic.relatedTopics.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Layout Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.relatedTopics.map(slug => (
              <Link
                key={slug}
                to={`/layout/${slug}`}
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
