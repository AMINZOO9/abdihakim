import ProgressBar from '../components/ProgressBar'

const classes = [
  { name: 'Grade 4A', learners: 36, subject: 'Mathematics' },
  { name: 'Grade 5B', learners: 33, subject: 'Integrated Science' },
  { name: 'Grade 6A', learners: 29, subject: 'English Activities' },
]

const competencyRows = [
  { learner: 'Aisha Mohamed', numeracy: 'Meeting', literacy: 'Exceeding', science: 'Approaching' },
  { learner: 'Brian Otieno', numeracy: 'Approaching', literacy: 'Meeting', science: 'Meeting' },
  { learner: 'Cynthia Njeri', numeracy: 'Exceeding', literacy: 'Exceeding', science: 'Meeting' },
]

const assessments = [
  'Creative Arts practical review due Friday.',
  'Numeracy task book checked for Grade 4A.',
  'Science project peer scoring completed.',
]

export default function TeacherDashboard() {
  return (
    <main className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft lg:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">Assigned Classes</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {classes.map((item) => (
              <div key={item.name} className="rounded-xl2 border border-slate-100 bg-slate-50 p-4">
                <h4 className="text-sm font-semibold text-slate-800">{item.name}</h4>
                <p className="mt-1 text-sm text-slate-500">{item.subject}</p>
                <p className="mt-3 text-xs font-medium text-brandBlue">{item.learners} learners</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl2 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-base font-bold text-slate-800">Mastery Levels</h3>
          <div className="space-y-4">
            <ProgressBar label="Numeracy" value={82} widthClass="w-[82%]" color="blue" />
            <ProgressBar label="Literacy" value={75} widthClass="w-[75%]" color="green" />
            <ProgressBar label="Science" value={68} widthClass="w-[68%]" color="yellow" />
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft xl:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">Learner Competency Tracker</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-2 pr-4">Learner</th>
                  <th className="py-2 pr-4">Numeracy</th>
                  <th className="py-2 pr-4">Literacy</th>
                  <th className="py-2 pr-4">Science</th>
                </tr>
              </thead>
              <tbody>
                {competencyRows.map((row) => (
                  <tr key={row.learner} className="border-b border-slate-50 text-slate-600">
                    <td className="py-3 pr-4 font-medium text-slate-700">{row.learner}</td>
                    <td className="py-3 pr-4">{row.numeracy}</td>
                    <td className="py-3 pr-4">{row.literacy}</td>
                    <td className="py-3 pr-4">{row.science}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-xl2 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-base font-bold text-slate-800">Recent Assessments</h3>
          <ul className="space-y-3">
            {assessments.map((entry) => (
              <li key={entry} className="rounded-xl2 bg-slate-50 p-3 text-sm text-slate-600">
                {entry}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}
