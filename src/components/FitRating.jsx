export default function FitRating({ value = 0, onChange, readOnly = false }) {
  return (
    <div className="fit-rating" role="group" aria-label="Fit rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`fit-dot${n <= value ? ` active r${n}` : ''}`}
          style={readOnly ? { cursor: 'default' } : undefined}
          onClick={!readOnly && onChange ? () => onChange(n) : undefined}
          role={readOnly ? undefined : 'button'}
          tabIndex={readOnly ? undefined : 0}
          onKeyDown={
            !readOnly && onChange
              ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange(n) } }
              : undefined
          }
          aria-label={`${n} of 5`}
        />
      ))}
    </div>
  )
}
