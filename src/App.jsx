import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginModal from './components/LoginModal'
import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'
import { useAuth } from './context/AuthContext'
import AdminDashboard from './pages/AdminDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import ParentDashboard from './pages/ParentDashboard'

function LandingPage({ onLoginClick }) {
  return (
    <div className="min-h-screen bg-appBg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brandBlue">CBE Insight</p>
          <p className="text-xs text-slate-500">Turning Competencies Into Clarity</p>
        </div>
        <button
          type="button"
          onClick={onLoginClick}
          className="rounded-xl2 bg-brandBlue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-800">
            Competency-based insights for schools, teachers, and parents.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600">
            Track learner mastery, monitor classroom performance, and deliver clear progress updates
            across every stakeholder in your CBC ecosystem.
          </p>
        </div>

        <div className="rounded-xl2 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-bold text-slate-800">Role-based experiences</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Admin dashboard with KPIs and school-wide trend overviews.</li>
            <li>• Teacher dashboard for classes, assessments, and learner mastery.</li>
            <li>• Parent dashboard with child progress, feedback, and term summary.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

function DashboardLayout({ allowedRole, children }) {
  const navigate = useNavigate()
  const { role, logout } = useAuth()

  if (!role) {
    return <Navigate to="/" replace />
  }

  if (role !== allowedRole) {
    return <Navigate to={`/${role}/dashboard`} replace />
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="flex min-h-screen bg-appBg">
      <Sidebar role={role} />
      <div className="w-full p-4 sm:p-6">
        <TopNavbar role={role} onLogout={handleLogout} />
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = (role) => {
    login(role)
    navigate(`/${role}/dashboard`)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onLoginClick={() => setIsLoginOpen(true)} />} />
        <Route
          path="/admin/dashboard"
          element={
            <DashboardLayout allowedRole="admin">
              <AdminDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/teacher/dashboard"
          element={
            <DashboardLayout allowedRole="teacher">
              <TeacherDashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/parent/dashboard"
          element={
            <DashboardLayout allowedRole="parent">
              <ParentDashboard />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSubmit={handleLogin}
      />
    </>
  )
}
