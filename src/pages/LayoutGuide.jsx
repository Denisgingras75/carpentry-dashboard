import { useState } from 'react'
import { Link } from 'react-router-dom'
import layoutTopics, { LAYOUT_CATEGORIES, LAYOUT_CATEGORY_ORDER } from '../data/layout-knowledge'

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

export default function LayoutGuide() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? layoutTopics : layoutTopics.filter(t => t.category === filter)

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1
          className="font-display"
          style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
        >
          Layout & Measuring
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          {layoutTopics.length} topics — from furniture to foundation to ridge
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
        {LAYOUT_CATEGORY_ORDER.map(key => (
          <button
            key={key}
            className={`chip${filter === key ? ' active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {LAYOUT_CATEGORIES[key].label}
          </button>
        ))}
      </div>

      {/* Topic List */}
      {filter === 'all' ? (
        <div className="flex flex-col gap-5">
          {LAYOUT_CATEGORY_ORDER.map(catKey => {
            const cat = LAYOUT_CATEGORIES[catKey]
            const catTopics = layoutTopics.filter(t => t.category === catKey)
            if (catTopics.length === 0) return null

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
                  {catTopics.map(topic => (
                    <TopicCard key={topic.slug} topic={topic} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {filtered.map(topic => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      )}
    </div>
  )
}

function TopicCard({ topic }) {
  return (
    <Link
      to={`/layout/${topic.slug}`}
      className="card-accent flex items-start justify-between p-3 gap-3"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-medium text-sm">{topic.name}</span>
          <DifficultyDots level={topic.difficulty} />
        </div>
        <p
          className="text-xs line-clamp-2 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {topic.summary}
        </p>
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
