import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null)

  const login = (nextRole) => {
    setRole(nextRole)
  }

  const logout = () => {
    setRole(null)
  }

  const value = useMemo(() => ({ role, login, logout }), [role])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
