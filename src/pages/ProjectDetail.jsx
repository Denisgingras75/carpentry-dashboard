import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { useProject, useUpdateProject, useDeleteProject, useMilestones, useCreateMilestone, useUpdateMilestone, useDeleteMilestone } from '../hooks/useProjects'
import { PROJECT_STATUSES } from '../lib/constants'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { project, loading } = useProject(id)
  const { milestones } = useMilestones(id)
  const updateProject = useUpdateProject()
  const deleteProject = useDeleteProject()
  const createMilestone = useCreateMilestone()
  const updateMilestone = useUpdateMilestone()
  const deleteMilestone = useDeleteMilestone()
  const [newMilestone, setNewMilestone] = useState('')

  async function handleStatusChange(status) {
    try {
      await updateProject.mutateAsync({ id, data: { status } })
      toast.success(`Project ${status}`)
    } catch {
      toast.error('Failed to update')
    }
  }

  async function handleDelete() {
    if (!window.confirm('Delete this project and all milestones?')) return
    try {
      await deleteProject.mutateAsync(id)
      toast.success('Deleted')
      navigate('/projects')
    } catch {
      toast.error('Failed to delete')
    }
  }

  async function handleAddMilestone(e) {
    e.preventDefault()
    if (!newMilestone.trim() || !user) return
    try {
      await createMilestone.mutateAsync({ userId: user.id, projectId: id, title: newMilestone.trim() })
      setNewMilestone('')
    } catch {
      toast.error('Failed to add milestone')
    }
  }

  async function toggleMilestone(m) {
    try {
      await updateMilestone.mutateAsync({ id: m.id, data: { is_done: !m.is_done } })
    } catch {
      toast.error('Failed to update')
    }
  }

  if (loading) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
  if (!project) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Not found</div>

  const doneCount = milestones.filter(m => m.is_done).length
  const progress = milestones.length > 0 ? Math.round((doneCount / milestones.length) * 100) : 0

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button className="btn-ghost" onClick={() => navigate('/projects')}>← Back</button>
        <button className="btn-ghost" style={{ color: 'var(--color-danger)' }} onClick={handleDelete}>Delete</button>
      </div>

      {/* Project Header */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-display" style={{ fontSize: '1.375rem', color: 'var(--color-text-primary)' }}>{project.name}</h2>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: 'var(--color-surface)', color: PROJECT_STATUSES[project.status]?.color }}>
            {PROJECT_STATUSES[project.status]?.label}
          </span>
        </div>
        {project.description && <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>}
        {project.target_date && (
          <p className="text-xs mb-3" style={{ color: 'var(--color-text-tertiary)' }}>
            Target: {new Date(project.target_date + 'T12:00:00').toLocaleDateString()}
          </p>
        )}
        <div className="flex gap-2">
          {project.status !== 'active' && (
            <button className="btn-ghost text-xs" style={{ color: 'var(--color-success)' }} onClick={() => handleStatusChange('active')}>Activate</button>
          )}
          {project.status !== 'paused' && project.status !== 'completed' && (
            <button className="btn-ghost text-xs" style={{ color: 'var(--color-warning)' }} onClick={() => handleStatusChange('paused')}>Pause</button>
          )}
          {project.status !== 'completed' && (
            <button className="btn-ghost text-xs" style={{ color: 'var(--color-primary)' }} onClick={() => handleStatusChange('completed')}>Complete</button>
          )}
        </div>
      </div>

      {/* Milestones */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Milestones</h3>
          {milestones.length > 0 && (
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{doneCount}/{milestones.length} ({progress}%)</span>
          )}
        </div>

        {/* Progress Bar */}
        {milestones.length > 0 && (
          <div className="w-full h-2 rounded-full mb-4" style={{ background: 'var(--color-border-light)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: 'var(--color-success)' }} />
          </div>
        )}

        <div className="flex flex-col gap-2 mb-3">
          {milestones.map(m => (
            <div key={m.id} className="flex items-center gap-3 group">
              <input
                type="checkbox"
                checked={m.is_done}
                onChange={() => toggleMilestone(m)}
                className="w-4 h-4"
                style={{ accentColor: 'var(--color-success)' }}
              />
              <span className="text-sm flex-1" style={{
                color: m.is_done ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                textDecoration: m.is_done ? 'line-through' : 'none',
              }}>
                {m.title}
              </span>
              <button
                className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-danger)' }}
                onClick={() => { if (window.confirm('Delete milestone?')) deleteMilestone.mutate(m.id) }}
              >×</button>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddMilestone} className="flex gap-2">
          <input
            className="input flex-1"
            placeholder="Add milestone..."
            value={newMilestone}
            onChange={e => setNewMilestone(e.target.value)}
          />
          <button type="submit" className="btn-primary text-sm" disabled={!newMilestone.trim()}>Add</button>
        </form>
      </div>
    </div>
  )
}
