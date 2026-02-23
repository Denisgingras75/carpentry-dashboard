import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects-library'
import { getJointBySlug } from '../data/joints'
import { getWoodBySlug } from '../data/woods'
import { getTechniqueBySlug } from '../data/techniques'

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

export default function ProjectPlanDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>
        Project plan not found.{' '}
        <Link to="/plans" style={{ color: 'var(--color-accent)' }}>Back to Plans</Link>
      </div>
    )
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      {/* Back */}
      <button
        className="btn-ghost self-start"
        onClick={() => navigate('/plans')}
        style={{ marginLeft: -8 }}
      >
        ← Project Plans
      </button>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1
            className="font-display"
            style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
          >
            {project.name}
          </h1>
          <DifficultyBadge level={project.difficulty} />
        </div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>
            {project.estimatedTime}
          </span>
        </div>
        <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--color-text-secondary)' }}>
          {project.summary}
        </p>
      </div>

      {/* Description */}
      <div className="card p-4">
        <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
          About This Project
        </h2>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
          {project.description}
        </div>
      </div>

      {/* Build Steps */}
      {project.steps && project.steps.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Build Steps
          </h2>
          <ol className="flex flex-col gap-2">
            {project.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, fontWeight: 700, minWidth: 20 }}>{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Tools Needed */}
      {project.tools && project.tools.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Tools Needed
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Materials */}
      {project.materials && project.materials.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Materials
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.materials.map(m => (
              <span key={m} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {project.tips && project.tips.length > 0 && (
        <div className="card p-4">
          <h2 className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)' }}>
            Tips
          </h2>
          <ul className="flex flex-col gap-2">
            {project.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-success)', flexShrink: 0, fontWeight: 600 }}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Joints Used */}
      {project.joints && project.joints.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Joints You'll Practice
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.joints.map(slug => {
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

      {/* Techniques Used */}
      {project.skills && project.skills.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Techniques You'll Use
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map(slug => {
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

      {/* Best Woods */}
      {project.woods && project.woods.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Recommended Woods
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.woods.map(slug => {
              const wood = getWoodBySlug(slug)
              return (
                <Link
                  key={slug}
                  to={`/wood/${slug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {wood ? wood.name : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Related Projects */}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <div>
          <h2
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
          >
            Related Projects
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.relatedProjects.map(slug => {
              const related = getProjectBySlug(slug)
              return (
                <Link
                  key={slug}
                  to={`/plan/${slug}`}
                  className="chip"
                  style={{ textDecoration: 'none' }}
                >
                  {related ? related.name : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
