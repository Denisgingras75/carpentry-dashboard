import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { usePracticeLogs } from '../hooks/usePracticeLogs'
import EmptyState from '../components/EmptyState'

function ProgressChart({ logs }) {
  // Gap over time per joint type (inverted Y: lower gap = higher skill)
  const jointTypes = [...new Set(logs.filter(l => l.gap_mm != null).map(l => l.joint_type))]
  const colors = ['#8B5E3C', '#C8922A', '#2D6A4F', '#C0392B', '#D35400', '#1B5E3A']

  if (jointTypes.length === 0) return null

  const allGaps = logs.filter(l => l.gap_mm != null).map(l => l.gap_mm)
  const maxGap = Math.max(...allGaps, 5)
  const allDates = logs.filter(l => l.gap_mm != null).map(l => new Date(l.session_date + 'T12:00:00').getTime())
  const minDate = Math.min(...allDates)
  const maxDate = Math.max(...allDates)
  const dateRange = maxDate - minDate || 1

  const width = 600
  const height = 250
  const pad = { top: 20, right: 20, bottom: 30, left: 45 }
  const plotW = width - pad.left - pad.right
  const plotH = height - pad.top - pad.bottom

  function x(date) { return pad.left + ((date - minDate) / dateRange) * plotW }
  function y(gap) { return pad.top + (gap / maxGap) * plotH }

  return (
    <div className="card p-4">
      <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>Gap Over Time</h3>
      <p className="text-xs mb-2" style={{ color: 'var(--color-text-tertiary)' }}>Lower is better — tighter joints</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ maxHeight: 250 }}>
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => {
          const gapVal = (maxGap / 4) * i
          return (
            <g key={i}>
              <line x1={pad.left} y1={y(gapVal)} x2={width - pad.right} y2={y(gapVal)}
                stroke="var(--color-border-light)" strokeWidth="1" />
              <text x={pad.left - 8} y={y(gapVal) + 4} textAnchor="end" fill="var(--color-text-tertiary)" fontSize="10">
                {gapVal.toFixed(1)}
              </text>
            </g>
          )
        })}

        {/* Y-axis label */}
        <text x={12} y={height / 2} textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="10"
          transform={`rotate(-90, 12, ${height / 2})`}>Gap (mm)</text>

        {/* Lines per joint type */}
        {jointTypes.map((jt, idx) => {
          const points = logs
            .filter(l => l.joint_type === jt && l.gap_mm != null)
            .sort((a, b) => a.session_date.localeCompare(b.session_date))
            .map(l => ({
              x: x(new Date(l.session_date + 'T12:00:00').getTime()),
              y: y(l.gap_mm),
            }))

          if (points.length < 2) return null
          const color = colors[idx % colors.length]
          const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

          return (
            <g key={jt}>
              <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} />
              ))}
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-2">
        {jointTypes.map((jt, idx) => (
          <div key={jt} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full" style={{ background: colors[idx % colors.length] }} />
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{jt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityHeatMap({ logs }) {
  // 52-week GitHub-style heat map
  const today = new Date()
  const weeks = 52
  const dayMs = 86400000

  // Build date→count map
  const countMap = {}
  for (const log of logs) {
    countMap[log.session_date] = (countMap[log.session_date] || 0) + 1
  }

  // Generate grid: 52 weeks × 7 days
  const cells = []
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - (weeks * 7) + (7 - startDate.getDay()))

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate.getTime() + (w * 7 + d) * dayMs)
      if (date > today) continue
      const key = date.toISOString().split('T')[0]
      const count = countMap[key] || 0
      cells.push({ w, d, date: key, count })
    }
  }

  const cellSize = 11
  const gap = 2
  const width = weeks * (cellSize + gap) + 30
  const height = 7 * (cellSize + gap) + 20

  function getColor(count) {
    if (count === 0) return 'var(--color-heatmap-0)'
    if (count === 1) return 'var(--color-heatmap-1)'
    if (count === 2) return 'var(--color-heatmap-2)'
    if (count <= 4) return 'var(--color-heatmap-3)'
    return 'var(--color-heatmap-4)'
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="card p-4">
      <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>Activity</h3>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} style={{ minWidth: 700, width: '100%' }}>
          {/* Day labels */}
          {['M', '', 'W', '', 'F', '', ''].map((label, i) => (
            <text key={i} x={0} y={20 + i * (cellSize + gap) + cellSize / 2 + 3}
              fill="var(--color-text-tertiary)" fontSize="9">{label}</text>
          ))}

          {/* Cells */}
          {cells.map(c => (
            <rect
              key={c.date}
              x={20 + c.w * (cellSize + gap)}
              y={20 + c.d * (cellSize + gap)}
              width={cellSize}
              height={cellSize}
              rx="2"
              fill={getColor(c.count)}
            >
              <title>{c.date}: {c.count} joint{c.count !== 1 ? 's' : ''}</title>
            </rect>
          ))}

          {/* Month labels */}
          {cells.filter(c => c.d === 0 && new Date(c.date + 'T12:00:00').getDate() <= 7).map(c => (
            <text key={c.date} x={20 + c.w * (cellSize + gap)} y={14}
              fill="var(--color-text-tertiary)" fontSize="9">
              {months[new Date(c.date + 'T12:00:00').getMonth()]}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 mt-2 justify-end">
        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Less</span>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className="w-3 h-3 rounded-sm" style={{ background: `var(--color-heatmap-${i})` }} />
        ))}
        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>More</span>
      </div>
    </div>
  )
}

function FitTrend({ logs }) {
  // Monthly average fit rating
  const monthly = {}
  for (const log of logs) {
    if (!log.fit_rating) continue
    const month = log.session_date.substring(0, 7)
    if (!monthly[month]) monthly[month] = []
    monthly[month].push(log.fit_rating)
  }

  const months = Object.keys(monthly).sort()
  if (months.length === 0) return null

  const averages = months.map(m => ({
    month: m,
    avg: monthly[m].reduce((a, b) => a + b, 0) / monthly[m].length,
    count: monthly[m].length,
  }))

  const width = 500
  const height = 180
  const pad = { top: 20, right: 10, bottom: 30, left: 35 }
  const plotW = width - pad.left - pad.right
  const barW = Math.min(40, plotW / averages.length - 4)

  return (
    <div className="card p-4">
      <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>Fit Rating Trend</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        {/* Y-axis */}
        {[1, 2, 3, 4, 5].map(v => (
          <g key={v}>
            <line x1={pad.left} y1={pad.top + ((5 - v) / 4) * (height - pad.top - pad.bottom)}
              x2={width - pad.right} y2={pad.top + ((5 - v) / 4) * (height - pad.top - pad.bottom)}
              stroke="var(--color-border-light)" strokeWidth="1" />
            <text x={pad.left - 8} y={pad.top + ((5 - v) / 4) * (height - pad.top - pad.bottom) + 4}
              textAnchor="end" fill="var(--color-text-tertiary)" fontSize="10">{v}</text>
          </g>
        ))}

        {/* Bars */}
        {averages.map((a, i) => {
          const barH = ((a.avg - 1) / 4) * (height - pad.top - pad.bottom)
          const barX = pad.left + (i * (plotW / averages.length)) + (plotW / averages.length - barW) / 2
          const barY = pad.top + (height - pad.top - pad.bottom) - barH
          const color = a.avg >= 4 ? 'var(--color-success)' : a.avg >= 3 ? 'var(--color-accent)' : 'var(--color-danger)'

          return (
            <g key={a.month}>
              <rect x={barX} y={barY} width={barW} height={barH} rx="3" fill={color} opacity="0.8" />
              <text x={barX + barW / 2} y={height - 8} textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9">
                {a.month.substring(5)}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function StatsCards({ logs }) {
  const totalJoints = logs.length
  const uniqueJointTypes = new Set(logs.map(l => l.joint_type)).size
  const avgGap = logs.filter(l => l.gap_mm != null).length > 0
    ? (logs.filter(l => l.gap_mm != null).reduce((s, l) => s + l.gap_mm, 0) / logs.filter(l => l.gap_mm != null).length).toFixed(1)
    : '—'
  const avgFit = logs.filter(l => l.fit_rating != null).length > 0
    ? (logs.filter(l => l.fit_rating != null).reduce((s, l) => s + l.fit_rating, 0) / logs.filter(l => l.fit_rating != null).length).toFixed(1)
    : '—'
  const totalMinutes = logs.reduce((s, l) => s + (l.duration_minutes || 0), 0)

  const stats = [
    { label: 'Total Joints', value: totalJoints },
    { label: 'Joint Types', value: uniqueJointTypes },
    { label: 'Avg Gap', value: avgGap === '—' ? avgGap : `${avgGap}mm` },
    { label: 'Avg Fit', value: `${avgFit}/5` },
    { label: 'Hours', value: totalMinutes > 0 ? `${(totalMinutes / 60).toFixed(0)}h` : '—' },
  ]

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
      {stats.map(s => (
        <div key={s.label} className="card p-3 text-center">
          <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{s.value}</div>
          <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  const { user } = useAuth()
  const { logs, loading } = usePracticeLogs(user?.id)

  if (loading) return <div className="p-4 text-center" style={{ color: 'var(--color-text-tertiary)' }}>Loading...</div>

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-4">
      <h1 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Skills</h1>

      {logs.length === 0 ? (
        <EmptyState icon="📊" title="No data yet" description="Log some practice joints to see your progression." />
      ) : (
        <>
          <StatsCards logs={logs} />
          <ProgressChart logs={logs} />
          <FitTrend logs={logs} />
          <ActivityHeatMap logs={logs} />
        </>
      )}
    </div>
  )
}
