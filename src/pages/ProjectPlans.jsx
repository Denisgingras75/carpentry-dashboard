import { useState } from 'react'
import { Link } from 'react-router-dom'
import projects, { PROJECT_CATEGORIES, PROJECT_CATEGORY_ORDER } from '../data/projects-library'

function DifficultyDots({ level }) {
  return (
    <div className="flex gap-1" aria-label={`Difficulty ${level} of 5`}>
      {[1, 2, 3, 4, 5].map(n => (
        <div
          key={n}
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: n <= level ? 'var(--color-accent)' : 'var(--color-border)',
            transition: 'background 0.15s',
          }}
        />
      ))}
    </div>
  )
}

export default function ProjectPlans() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1
          className="font-display"
          style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
        >
          Project Plans
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          {projects.length} builds from beginner to expert
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          className={`chip${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {PROJECT_CATEGORY_ORDER.map(key => (
          <button
            key={key}
            className={`chip${filter === key ? ' active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {PROJECT_CATEGORIES[key].label}
          </button>
        ))}
      </div>

      {/* Project List */}
      {filter === 'all' ? (
        // Grouped by category
        <div className="flex flex-col gap-5">
          {PROJECT_CATEGORY_ORDER.map(catKey => {
            const cat = PROJECT_CATEGORIES[catKey]
            const catProjects = projects.filter(p => p.category === catKey)
            if (catProjects.length === 0) return null

            return (
              <div key={catKey}>
                <div className="mb-2">
                  <h2
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                  >
                    {cat.label}
                  </h2>
                  <p className="text-xs" style={{ color: 'var(--color-text-tertiary)', opacity: 0.7 }}>
                    {cat.description}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  {catProjects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // Flat list for filtered
        <div className="flex flex-col gap-1.5">
          {filtered.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link
      to={`/plan/${project.slug}`}
      className="card-accent flex items-start justify-between p-3 gap-3"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-medium text-sm">{project.name}</span>
          <DifficultyDots level={project.difficulty} />
        </div>
        <p
          className="text-xs line-clamp-2 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {project.summary}
        </p>
        <span className="text-xs mt-1 inline-block" style={{ color: 'var(--color-text-tertiary)' }}>
          {project.estimatedTime}
        </span>
      </div>
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 28,
          height: 28,
          color: 'var(--color-text-tertiary)',
          opacity: 0.5,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  )
}
