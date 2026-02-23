import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { usePracticeLog, useUpdatePracticeLog, useDeletePracticeLog } from '../hooks/usePracticeLogs'
import { usePhotos, useUploadPhoto, useDeletePhoto } from '../hooks/usePhotos'
import { JOINT_TYPES, WOOD_SPECIES } from '../lib/constants'
import FitRating from '../components/FitRating'
import PhotoUpload from '../components/PhotoUpload'

export default function LogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { log, loading } = usePracticeLog(id)
  const { photos } = usePhotos(id)
  const uploadPhoto = useUploadPhoto()
  const deletePhoto = useDeletePhoto()
  const updateLog = useUpdatePracticeLog()
  const deleteLog = useDeletePracticeLog()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(null)

  function startEdit() {
    setForm({
      joint_type: log.joint_type,
      wood_species: log.wood_species || '',
      gap_mm: log.gap_mm != null ? String(log.gap_mm) : '',
      fit_rating: log.fit_rating || 0,
      notes: log.notes || '',
      duration_minutes: log.duration_minutes != null ? String(log.duration_minutes) : '',
    })
    setEditing(true)
  }

  async function handleSave() {
    try {
      await updateLog.mutateAsync({
        id,
        data: {
          joint_type: form.joint_type,
          wood_species: form.wood_species || null,
          gap_mm: form.gap_mm ? parseFloat(form.gap_mm) : null,
          fit_rating: form.fit_rating || null,
          notes: form.notes || null,
          duration_minutes: form.duration_minutes ? parseInt(form.duration_minutes) : null,
        }
      })
      toast.success('Updated')
      setEditing(false)
    } catch {
      toast.error('Failed to update')
    }
  }

  async function handleDelete() {
    if (!window.confirm('Delete this log entry?')) return
    try {
      await deleteLog.mutateAsync(id)
      toast.success('Deleted')
      navigate('/log')
    } catch {
      toast.error('Failed to delete')
    }
  }

  async function handlePhotoUpload(file) {
    if (!user) return
    try {
      await uploadPhoto.mutateAsync({
        userId: user.id,
        file,
        metadata: { practice_log_id: id, photo_type: 'detail' }
      })
      toast.success('Photo uploaded')
    } catch {
      toast.error('Upload failed')
    }
  }

  if (loading) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
  if (!log) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Not found</div>

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button className="btn-ghost" onClick={() => navigate('/log')}>← Back</button>
        <div className="flex gap-2">
          {!editing && <button className="btn-ghost" onClick={startEdit}>Edit</button>}
          <button className="btn-ghost" style={{ color: 'var(--color-danger)' }} onClick={handleDelete}>Delete</button>
        </div>
      </div>

      {/* Detail Card */}
      <div className="card p-4 flex flex-col gap-3">
        {editing ? (
          <>
            <select className="input" value={form.joint_type} onChange={e => setForm(f => ({ ...f, joint_type: e.target.value }))}>
              {JOINT_TYPES.map(j => <option key={j} value={j}>{j}</option>)}
            </select>
            <select className="input" value={form.wood_species} onChange={e => setForm(f => ({ ...f, wood_species: e.target.value }))}>
              <option value="">Wood species</option>
              {WOOD_SPECIES.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
            <div className="flex gap-3">
              <input type="number" className="input" placeholder="Gap (mm)" step="0.1"
                value={form.gap_mm} onChange={e => setForm(f => ({ ...f, gap_mm: e.target.value }))} style={{ flex: 1 }} />
              <input type="number" className="input" placeholder="Duration (min)"
                value={form.duration_minutes} onChange={e => setForm(f => ({ ...f, duration_minutes: e.target.value }))} style={{ flex: 1 }} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Fit:</span>
              <FitRating value={form.fit_rating} onChange={v => setForm(f => ({ ...f, fit_rating: v }))} />
            </div>
            <textarea className="input" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Notes..." />
            <div className="flex gap-2">
              <button className="btn-primary flex-1" onClick={handleSave} disabled={updateLog.isPending}>Save</button>
              <button className="btn-secondary flex-1" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display" style={{ fontSize: '1.375rem', color: 'var(--color-text-primary)' }}>{log.joint_type}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {log.wood_species && <span>Wood: {log.wood_species}</span>}
              {log.gap_mm != null && <span>Gap: {log.gap_mm}mm</span>}
              {log.duration_minutes && <span>Duration: {log.duration_minutes} min</span>}
              <span>Date: {new Date(log.session_date + 'T12:00:00').toLocaleDateString()}</span>
            </div>
            {log.fit_rating && (
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Fit:</span>
                <FitRating value={log.fit_rating} readOnly />
              </div>
            )}
            {log.notes && <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{log.notes}</p>}
          </>
        )}
      </div>

      {/* Photos */}
      <div className="card p-4">
        <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>Photos</h3>
        {photos.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-3">
            {photos.map(p => (
              <div key={p.id} className="relative aspect-square rounded-lg overflow-hidden" style={{ background: 'var(--color-surface)' }}>
                <img src={p.public_url} alt="" className="w-full h-full object-cover" />
                <button
                  className="absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
                  onClick={() => {
                    if (window.confirm('Delete photo?')) deletePhoto.mutate({ id: p.id, storagePath: p.storage_path })
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <PhotoUpload onUpload={handlePhotoUpload} loading={uploadPhoto.isPending} />
      </div>
    </div>
  )
}
