import { useState, useRef } from 'react'

async function compressImage(file) {
  let imageFile = file
  if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
    const heic2any = (await import('heic2any')).default
    const blob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.82 })
    imageFile = new File([blob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' })
  }

  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const MAX = 1200
      let { width, height } = img
      if (width > MAX || height > MAX) {
        if (width > height) {
          height = (height / width) * MAX
          width = MAX
        } else {
          width = (width / height) * MAX
          height = MAX
        }
      }
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      canvas.toBlob(
        (blob) => resolve(new File([blob], imageFile.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' })),
        'image/jpeg',
        0.82
      )
    }
    img.src = URL.createObjectURL(imageFile)
  })
}

export default function PhotoUpload({ onUpload }) {
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  async function handleChange(e) {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    try {
      const compressed = await compressImage(file)
      setPreview(URL.createObjectURL(compressed))
      onUpload(compressed)
    } catch {
      // Compression failed silently
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-2 w-full py-6 rounded-lg cursor-pointer transition-colors"
        style={{
          border: '2px dashed var(--color-border)',
          background: 'var(--color-surface)',
          color: 'var(--color-text-secondary)',
        }}
        disabled={loading}
      >
        {loading ? (
          <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
            Compressing...
          </span>
        ) : preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-20 h-20 rounded-md object-cover"
          />
        ) : (
          <>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span className="text-sm font-medium">Add Photo</span>
          </>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.heic,.heif"
        capture="environment"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  )
}
