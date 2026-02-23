import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { useProjects, useCreateProject } from '../hooks/useProjects'
import { PROJECT_STATUSES } from '../lib/constants'
import EmptyState from '../components/EmptyState'

export default function Projects() {
  const { user, signIn } = useAuth()
  const { projects, loading } = useProjects(user?.id)
  const createProject = useCreateProject()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', description: '', target_date: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!user) { signIn(); return }
    if (!form.name.trim()) { toast.error('Name required'); return }

    try {
      await createProject.mutateAsync({
        userId: user.id,
        data: {
          name: form.name.trim(),
          description: form.description || null,
          target_date: form.target_date || null,
        }
      })
      toast.success('Project created')
      setShowForm(false)
      setForm({ name: '', description: '', target_date: '' })
    } catch {
      toast.error('Failed to create')
    }
  }

  const active = projects.filter(p => p.status === 'active')
  const paused = projects.filter(p => p.status === 'paused')
  const completed = projects.filter(p => p.status === 'completed')

  function renderSection(title, items) {
    if (items.length === 0) return null
    return (
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-tertiary)' }}>
          {title} ({items.length})
        </h2>
        <div className="flex flex-col gap-2">
          {items.map(p => (
            <Link key={p.id} to={`/projects/${p.id}`} className="card p-4" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-sm">{p.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--color-surface)', color: PROJECT_STATUSES[p.status]?.color }}>
                  {PROJECT_STATUSES[p.status]?.label}
                </span>
              </div>
              {p.description && (
                <p className="text-xs mt-1 line-clamp-1" style={{ color: 'var(--color-text-secondary)' }}>{p.description}</p>
              )}
              {p.target_date && (
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Target: {new Date(p.target_date + 'T12:00:00').toLocaleDateString()}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Projects</h1>
        <button className="btn-primary text-sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ New'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 flex flex-col gap-3 animate-in">
          <input className="input" placeholder="Project name *" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <textarea className="input" placeholder="Description..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          <input type="date" className="input" value={form.target_date} onChange={e => setForm(f => ({ ...f, target_date: e.target.value }))} />
          <button type="submit" className="btn-primary" disabled={createProject.isPending}>
            {createProject.isPending ? 'Creating...' : 'Create Project'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="py-12 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
      ) : projects.length === 0 ? (
        <EmptyState icon="📐" title="No projects" description="Create a project to track your builds from start to finish." />
      ) : (
        <>
          {renderSection('Active', active)}
          {renderSection('Paused', paused)}
          {renderSection('Completed', completed)}
        </>
      )}
    </div>
  )
}
