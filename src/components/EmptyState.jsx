export default function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && (
        <span className="text-5xl mb-4" role="img" aria-hidden="true">
          {icon}
        </span>
      )}
      {title && (
        <h3
          className="text-base font-semibold mb-1"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className="text-sm max-w-xs"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          {description}
        </p>
      )}
      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </div>
  )
}
