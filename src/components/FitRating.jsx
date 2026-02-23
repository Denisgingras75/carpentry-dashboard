export default function FitRating({ value = 0, onChange, readOnly = false, size = 'sm' }) {
  const large = size === 'lg'
  const labels = ['', 'Loose', 'Gappy', 'Fair', 'Snug', 'Dead On']

  return (
    <div className={large ? 'fit-rating-lg' : 'fit-rating'} role="group" aria-label="Fit rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`${large ? 'fit-dot-lg' : 'fit-dot'}${n <= value ? ` active r${n}` : ''}`}
          style={readOnly ? { cursor: 'default' } : undefined}
          onClick={!readOnly && onChange ? () => onChange(n === value ? 0 : n) : undefined}
          role={readOnly ? undefined : 'button'}
          tabIndex={readOnly ? undefined : 0}
          onKeyDown={
            !readOnly && onChange
              ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange(n === value ? 0 : n) } }
              : undefined
          }
          aria-label={`${n} of 5 — ${labels[n]}`}
        >
          {large ? n : null}
        </span>
      ))}
      {large && value > 0 && (
        <span
          className="text-xs font-medium"
          style={{
            color: 'var(--color-text-secondary)',
            marginLeft: 4,
            alignSelf: 'center',
          }}
        >
          {labels[value]}
        </span>
      )}
    </div>
  )
}
