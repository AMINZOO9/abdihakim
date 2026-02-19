import { useState } from 'react'
import { X } from 'lucide-react'
import RoleSelector from './RoleSelector'

export default function LoginModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'admin',
  })

  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData.role)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-xl2 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Welcome to CBE Insight</h2>
            <p className="text-sm text-slate-500">Turning Competencies Into Clarity</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close login dialog"
          >
            <X size={18} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-xl2 border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="you@school.ac.ke"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(event) => setFormData((prev) => ({ ...prev, password: event.target.value }))}
              className="w-full rounded-xl2 border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-1 block text-sm font-medium text-slate-600">
              Role
            </label>
            <RoleSelector
              id="role"
              value={formData.role}
              onChange={(event) => setFormData((prev) => ({ ...prev, role: event.target.value }))}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl2 bg-brandBlue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
