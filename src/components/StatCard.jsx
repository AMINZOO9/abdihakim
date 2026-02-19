export default function StatCard({ label, value, accent = 'blue' }) {
  const accentClasses = {
    blue: 'bg-blue-50 text-brandBlue',
    green: 'bg-green-50 text-brandGreen',
    yellow: 'bg-yellow-50 text-yellow-600',
  }

  return (
    <article className="rounded-xl2 bg-white p-4 shadow-soft">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-3 inline-block rounded-lg px-3 py-1 text-2xl font-bold ${accentClasses[accent]}`}>
        {value}
      </p>
    </article>
  )
}
