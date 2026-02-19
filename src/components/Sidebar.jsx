import { BarChart3, BookOpenCheck, Home, Users, UserSquare2 } from 'lucide-react'

const navByRole = {
  admin: [
    { label: 'Overview', icon: Home },
    { label: 'Learners', icon: Users },
    { label: 'Performance', icon: BarChart3 },
    { label: 'Teachers', icon: UserSquare2 },
  ],
  teacher: [
    { label: 'My Classes', icon: BookOpenCheck },
    { label: 'Assessments', icon: BarChart3 },
    { label: 'Learners', icon: Users },
  ],
  parent: [
    { label: 'Home', icon: Home },
    { label: 'Progress', icon: BarChart3 },
    { label: 'Feedback', icon: BookOpenCheck },
  ],
}

export default function Sidebar({ role }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-5 md:flex">
      <div className="mb-8 px-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">CBE Insight</p>
        <h1 className="text-lg font-bold text-slate-800">{role} workspace</h1>
      </div>

      <nav className="space-y-1">
        {navByRole[role].map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl2 px-3 py-2 text-left text-sm font-medium transition ${
                index === 0
                  ? 'bg-blue-50 text-brandBlue'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <Icon size={17} />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
