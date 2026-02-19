const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Parent', value: 'parent' },
]

export default function RoleSelector({ id, value, onChange }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl2 border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm focus:border-brandBlue focus:outline-none focus:ring-2 focus:ring-blue-100"
      aria-label="Select your role"
    >
      {roles.map((role) => (
        <option key={role.value} value={role.value}>
          {role.label}
        </option>
      ))}
    </select>
  )
}
