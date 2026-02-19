import StatCard from '../components/StatCard'
import ProgressBar from '../components/ProgressBar'

const kpis = [
  { label: 'Total Learners', value: '1,284', accent: 'blue' },
  { label: 'Active Teachers', value: '74', accent: 'green' },
  { label: 'CBC Classes', value: '36', accent: 'yellow' },
]

const activities = [
  'Grade 6 assessments uploaded by Ms. Wanjiru.',
  'Term 2 competency report released for Lower Primary.',
  'Teacher onboarding completed for Science department.',
]

const progressData = [
  { label: 'Literacy Mastery', value: 78, widthClass: 'w-[78%]', color: 'blue' },
  { label: 'Numeracy Mastery', value: 71, widthClass: 'w-[71%]', color: 'green' },
  { label: 'Science Inquiry', value: 64, widthClass: 'w-[64%]', color: 'yellow' },
]

export default function AdminDashboard() {
  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kpis.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft xl:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">School Analytics Snapshot</h3>
          <div className="grid h-56 place-items-center rounded-xl2 border border-dashed border-slate-200 bg-slate-50 text-center">
            <p className="max-w-sm text-sm text-slate-500">Chart placeholder: competency trends by grade and term performance over time.</p>
          </div>
        </article>

        <article className="rounded-xl2 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-base font-bold text-slate-800">Recent Activity</h3>
          <ul className="space-y-3">
            {activities.map((activity) => (
              <li key={activity} className="rounded-xl2 bg-slate-50 p-3 text-sm text-slate-600">
                {activity}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-xl2 bg-white p-5 shadow-soft">
        <h3 className="mb-4 text-base font-bold text-slate-800">CBC Performance Overview</h3>
        <div className="space-y-4">
          {progressData.map((item) => (
            <ProgressBar key={item.label} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}
