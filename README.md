# CBE Insight

**Turning Competencies Into Clarity**

Frontend-only SaaS dashboard built with:
- React (Vite)
- Tailwind CSS
- React Router DOM
- Context API
- Lucide Icons

## Features

- Login modal UI (email, password, role selector)
- Mock auth state with role-based redirects
- Route protection for:
  - `/admin/dashboard`
  - `/teacher/dashboard`
  - `/parent/dashboard`
- Admin dashboard with KPI cards, analytics placeholder, recent activity, and CBC performance progress
- Teacher dashboard with classes, competency table, mastery levels, and assessments
- Parent dashboard with learner profile, progress, teacher feedback, and term summary

## Project Structure

```txt
src/
  components/
    LoginModal.jsx
    RoleSelector.jsx
    Sidebar.jsx
    TopNavbar.jsx
    StatCard.jsx
    ProgressBar.jsx
  pages/
    AdminDashboard.jsx
    TeacherDashboard.jsx
    ParentDashboard.jsx
  context/
    AuthContext.jsx
  App.jsx
  main.jsx
  index.css
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (typically `http://localhost:5173`).

## Notes

- This app intentionally has **no backend, API, or real authentication**.
- Login is simulated by storing the selected role in React state.
