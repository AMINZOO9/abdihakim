import ProgressBar from '../components/ProgressBar'

const feedback = [
  {
    teacher: 'Ms. Akinyi',
    note: 'Excellent participation in literacy circles. Encourage daily reading at home.',
  },
  {
    teacher: 'Mr. Kariuki',
    note: 'Good growth in numeracy. Practice word problems to improve confidence.',
  },
]

export default function ParentDashboard() {
  return (
    <main className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft">
          <h3 className="text-base font-bold text-slate-800">Learner Profile</h3>
          <p className="mt-3 text-sm text-slate-600">Name: Zawadi Mwikali</p>
          <p className="text-sm text-slate-600">Grade: Grade 5</p>
          <p className="text-sm text-slate-600">Class Teacher: Ms. Akinyi</p>
          <p className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-brandBlue">Attendance: 96% this term</p>
        </article>

        <article className="rounded-xl2 bg-white p-5 shadow-soft lg:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">Competency Progress</h3>
          <div className="space-y-4">
            <ProgressBar label="Communication" value={84} widthClass="w-[84%]" color="green" />
            <ProgressBar label="Critical Thinking" value={72} widthClass="w-[72%]" color="blue" />
            <ProgressBar label="Creativity" value={65} widthClass="w-[65%]" color="yellow" />
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft xl:col-span-2">
          <h3 className="mb-4 text-base font-bold text-slate-800">Teacher Feedback</h3>
          <div className="space-y-4">
            {feedback.map((entry) => (
              <div key={entry.teacher} className="rounded-xl2 border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-700">{entry.teacher}</p>
                <p className="mt-1 text-sm text-slate-600">{entry.note}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl2 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-base font-bold text-slate-800">Term Summary Preview</h3>
          <p className="text-sm text-slate-600">Zawadi is steadily improving across key competencies and shows strong classroom engagement.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Strong literacy participation</li>
            <li>• Growing numeracy confidence</li>
            <li>• Consistent homework completion</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
