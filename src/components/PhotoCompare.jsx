import { useState, useRef, useCallback } from 'react'

export default function PhotoCompare({ beforeUrl, afterUrl }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  function handlePointerDown(e) {
    dragging.current = true
    containerRef.current?.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  function handlePointerMove(e) {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  function handlePointerUp() {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-lg overflow-hidden select-none"
      style={{ aspectRatio: '4 / 3', cursor: 'ew-resize' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After (full background) */}
      <img
        src={afterUrl}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeUrl}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || '100%', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          background: 'var(--color-surface-elevated)',
          boxShadow: '0 0 4px rgba(0,0,0,0.4)',
        }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'var(--color-surface-elevated)',
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 3L1 7l3 4" style={{ color: 'var(--color-text-secondary)' }} />
            <path d="M10 3l3 4-3 4" style={{ color: 'var(--color-text-secondary)' }} />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded"
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
        }}
      >
        Before
      </span>
      <span
        className="absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded"
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
        }}
      >
        After
      </span>
    </div>
  )
}
