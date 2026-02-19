export default function ProgressBar({ label, value, widthClass, color = 'blue' }) {
  const barColors = {
    blue: 'bg-brandBlue',
    green: 'bg-brandGreen',
    yellow: 'bg-brandYellow',
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">{label}</p>
        <span className="text-xs font-semibold text-slate-500">{value}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-slate-100">
        <div className={`h-2.5 rounded-full ${widthClass} ${barColors[color]}`} />
      </div>
    </div>
  )
}
