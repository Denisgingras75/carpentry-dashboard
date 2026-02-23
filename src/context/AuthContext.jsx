import { createContext, useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { clearCache } from '../lib/storage'
import { logger } from '../utils/logger'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const prevUserRef = useRef(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) logger.error('Error restoring session:', error)
      const sessionUser = session?.user ?? null
      setUser(sessionUser)
      prevUserRef.current = sessionUser
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const newUser = session?.user ?? null
      setUser(newUser)
      setLoading(false)
      prevUserRef.current = newUser
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
    if (error) logger.error('Sign in error:', error)
  }, [])

  const signOut = useCallback(async () => {
    clearCache()
    await supabase.auth.signOut()
    setUser(null)
  }, [])

  const value = useMemo(() => ({
    user,
    loading,
    signIn,
    signOut
  }), [user, loading, signIn, signOut])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
