import { useState } from 'react'
import { Link } from 'react-router-dom'
import joints, { JOINT_CATEGORIES, CATEGORY_ORDER } from '../data/joints'
import techniques, { TECHNIQUE_CATEGORIES, TECHNIQUE_CATEGORY_ORDER } from '../data/techniques'
import woods from '../data/woods'

const TABS = ['joints', 'techniques', 'wood', 'resources']

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

function HardnessBar({ janka }) {
  // Scale: 0 to 2000 Janka
  const pct = Math.min((janka / 2000) * 100, 100)
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          width: 48,
          height: 4,
          borderRadius: 2,
          background: 'var(--color-border)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: '100%',
            borderRadius: 2,
            background: 'var(--color-accent)',
          }}
        />
      </div>
      <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
        {janka}
      </span>
    </div>
  )
}

export default function Library() {
  const [tab, setTab] = useState('joints')

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1
          className="font-display"
          style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
        >
          The Apprentice's Guide
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          {joints.length} joints · {techniques.length} techniques · {woods.length} species
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/plans"
          className="card-accent p-3 flex items-center gap-3"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 36,
              height: 36,
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-accent-soft)',
              color: 'var(--color-accent)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-sm">Project Plans</div>
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>100 builds</div>
          </div>
        </Link>
        <Link
          to="/layout"
          className="card-accent p-3 flex items-center gap-3"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 36,
              height: 36,
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-accent-soft)',
              color: 'var(--color-accent)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 3H3v18h18V3z" />
              <path d="M21 9H3" />
              <path d="M21 15H3" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-sm">Layout Guide</div>
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Measure twice</div>
          </div>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {TABS.map(t => (
          <button
            key={t}
            className={`chip${tab === t ? ' active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'joints' ? 'Joints' : t === 'techniques' ? 'Techniques' : t === 'wood' ? 'Wood Species' : 'Resources'}
          </button>
        ))}
      </div>

      {/* Joints Tab */}
      {tab === 'joints' && (
        <div className="flex flex-col gap-5">
          {CATEGORY_ORDER.map(catKey => {
            const cat = JOINT_CATEGORIES[catKey]
            const catJoints = joints.filter(j => j.category === catKey)
            if (catJoints.length === 0) return null

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
                  {catJoints.map(joint => (
                    <Link
                      key={joint.slug}
                      to={`/joint/${joint.slug}`}
                      className="card-accent flex items-start justify-between p-3 gap-3"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-sm">{joint.name}</span>
                          <DifficultyDots level={joint.difficulty} />
                        </div>
                        <p
                          className="text-xs line-clamp-2 leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {joint.summary}
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
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Techniques Tab */}
      {tab === 'techniques' && (
        <div className="flex flex-col gap-5">
          {TECHNIQUE_CATEGORY_ORDER.map(catKey => {
            const cat = TECHNIQUE_CATEGORIES[catKey]
            const catTechniques = techniques.filter(t => t.category === catKey)
            if (catTechniques.length === 0) return null

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
                  {catTechniques.map(tech => (
                    <Link
                      key={tech.slug}
                      to={`/technique/${tech.slug}`}
                      className="card-accent flex items-start justify-between p-3 gap-3"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-sm">{tech.name}</span>
                          <DifficultyDots level={tech.difficulty} />
                        </div>
                        <p
                          className="text-xs line-clamp-2 leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {tech.summary}
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
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Wood Tab */}
      {tab === 'wood' && (
        <div className="flex flex-col gap-5">
          {['hardwood', 'softwood'].map(catKey => {
            const catWoods = woods.filter(w => w.category === catKey)
            if (catWoods.length === 0) return null

            return (
              <div key={catKey}>
                <h2
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                >
                  {catKey === 'hardwood' ? 'Hardwoods' : 'Softwoods'}
                </h2>
                <div className="flex flex-col gap-1.5">
                  {catWoods.map(wood => (
                    <Link
                      key={wood.slug}
                      to={`/wood/${wood.slug}`}
                      className="card-accent flex items-start justify-between p-3 gap-3"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-0.5">
                          <span className="font-medium text-sm">{wood.name}</span>
                          <HardnessBar janka={wood.hardness} />
                        </div>
                        <p
                          className="text-xs line-clamp-1 leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {wood.summary}
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
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Resources Tab — redirect to dedicated page */}
      {tab === 'resources' && (
        <div className="flex flex-col gap-4">
          {[
            { label: 'YouTube Channels', desc: '11 curated channels for joinery, timber framing, and hand tools', icon: '📺' },
            { label: 'Books', desc: '11 essential books from timber framing to wood science', icon: '📚' },
            { label: 'Essential Tools', desc: 'The tools you actually need, organized by category', icon: '🔨' },
            { label: 'Schools & Organizations', desc: 'Where to learn in person and connect with the community', icon: '🏛️' },
          ].map(item => (
            <Link
              key={item.label}
              to="/resources"
              className="card-accent p-4 flex items-center gap-3"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-accent-soft)',
                  fontSize: '1.25rem',
                }}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
