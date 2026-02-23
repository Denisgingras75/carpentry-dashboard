export default function EmptyState({ icon, title, description, action }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-6 text-center animate-in"
      style={{ minHeight: 280 }}
    >
      {icon && (
        <div
          className="flex items-center justify-center mb-5"
          style={{
            width: 64,
            height: 64,
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-accent-soft)',
            fontSize: '1.75rem',
          }}
          role="img"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      {title && (
        <h3
          className="font-display mb-2"
          style={{
            color: 'var(--color-text-primary)',
            fontSize: '1.25rem',
          }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className="text-sm max-w-[260px] leading-relaxed"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          {description}
        </p>
      )}
      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  )
}
