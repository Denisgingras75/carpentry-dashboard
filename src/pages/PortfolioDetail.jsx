import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '../context/AuthContext'
import { usePortfolioItem, useUpdatePortfolioItem, useDeletePortfolioItem } from '../hooks/usePortfolio'
import { usePortfolioPhotos, useUploadPhoto, useDeletePhoto } from '../hooks/usePhotos'
import PhotoUpload from '../components/PhotoUpload'

export default function PortfolioDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { item, loading } = usePortfolioItem(id)
  const { photos } = usePortfolioPhotos(id)
  const uploadPhoto = useUploadPhoto()
  const deletePhoto = useDeletePhoto()
  const updateItem = useUpdatePortfolioItem()
  const deleteItem = useDeletePortfolioItem()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(null)

  function startEdit() {
    setForm({
      title: item.title,
      description: item.description || '',
      materials: (item.materials || []).join(', '),
      joint_types: (item.joint_types || []).join(', '),
      completed_date: item.completed_date || '',
      skill_rating: item.skill_rating != null ? String(item.skill_rating) : '',
    })
    setEditing(true)
  }

  async function handleSave() {
    try {
      await updateItem.mutateAsync({
        id,
        data: {
          title: form.title.trim(),
          description: form.description || null,
          materials: form.materials ? form.materials.split(',').map(s => s.trim()).filter(Boolean) : [],
          joint_types: form.joint_types ? form.joint_types.split(',').map(s => s.trim()).filter(Boolean) : [],
          completed_date: form.completed_date || null,
          skill_rating: form.skill_rating ? parseInt(form.skill_rating) : null,
        }
      })
      toast.success('Updated')
      setEditing(false)
    } catch {
      toast.error('Failed to update')
    }
  }

  async function handleDelete() {
    if (!window.confirm('Delete this portfolio item?')) return
    try {
      await deleteItem.mutateAsync(id)
      toast.success('Deleted')
      navigate('/portfolio')
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
        metadata: { portfolio_item_id: id, photo_type: 'detail' }
      })
      toast.success('Photo uploaded')
    } catch {
      toast.error('Upload failed')
    }
  }

  if (loading) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>
  if (!item) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Not found</div>

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button className="btn-ghost" onClick={() => navigate('/portfolio')}>← Back</button>
        <div className="flex gap-2">
          {!editing && <button className="btn-ghost" onClick={startEdit}>Edit</button>}
          <button className="btn-ghost" style={{ color: 'var(--color-danger)' }} onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="card p-4 flex flex-col gap-3">
        {editing ? (
          <>
            <input className="input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            <textarea className="input" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Description..." />
            <input className="input" placeholder="Materials (comma separated)" value={form.materials} onChange={e => setForm(f => ({ ...f, materials: e.target.value }))} />
            <input className="input" placeholder="Joint types (comma separated)" value={form.joint_types} onChange={e => setForm(f => ({ ...f, joint_types: e.target.value }))} />
            <div className="flex gap-3">
              <input type="date" className="input" value={form.completed_date} onChange={e => setForm(f => ({ ...f, completed_date: e.target.value }))} style={{ flex: 1 }} />
              <input type="number" className="input" placeholder="Skill (1-10)" min="1" max="10"
                value={form.skill_rating} onChange={e => setForm(f => ({ ...f, skill_rating: e.target.value }))} style={{ flex: 1 }} />
            </div>
            <div className="flex gap-2">
              <button className="btn-primary flex-1" onClick={handleSave} disabled={updateItem.isPending}>Save</button>
              <button className="btn-secondary flex-1" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display" style={{ fontSize: '1.375rem', color: 'var(--color-text-primary)' }}>{item.title}</h2>
            {item.description && <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>}
            <div className="flex flex-wrap gap-1">
              {(item.materials || []).map(m => (
                <span key={m} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>{m}</span>
              ))}
              {(item.joint_types || []).map(j => (
                <span key={j} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>{j}</span>
              ))}
            </div>
            <div className="flex gap-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {item.completed_date && <span>Completed: {new Date(item.completed_date + 'T12:00:00').toLocaleDateString()}</span>}
              {item.skill_rating && <span style={{ color: 'var(--color-accent)' }}>Skill: {item.skill_rating}/10</span>}
            </div>
          </>
        )}
      </div>

      {/* Photos */}
      <div className="card p-4">
        <h3 className="font-semibold text-sm mb-3">Photos</h3>
        {photos.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
            {photos.map(p => (
              <div key={p.id} className="relative aspect-square rounded-lg overflow-hidden" style={{ background: 'var(--color-surface)' }}>
                <img src={p.public_url} alt="" className="w-full h-full object-cover" />
                <button
                  className="absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
                  onClick={() => { if (window.confirm('Delete photo?')) deletePhoto.mutate({ id: p.id, storagePath: p.storage_path }) }}
                >×</button>
              </div>
            ))}
          </div>
        )}
        <PhotoUpload onUpload={handlePhotoUpload} loading={uploadPhoto.isPending} />
      </div>
    </div>
  )
}
