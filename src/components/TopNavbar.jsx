import { LogOut } from 'lucide-react'

export default function TopNavbar({ role, onLogout }) {
  return (
    <header className="mb-6 flex items-center justify-between rounded-xl2 bg-white px-5 py-4 shadow-soft">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brandBlue">Dashboard</p>
        <h2 className="text-lg font-bold text-slate-800">{role} Portal</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-800">{role} User</p>
          <p className="text-xs text-slate-500">cbe.user@insight.app</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  )
}
