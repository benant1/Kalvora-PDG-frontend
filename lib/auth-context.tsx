'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '@/lib/api'

interface User {
  id: number
  email: string
  name: string
  role: string
  avatar?: string
  createdAt: string
  vendorStatus?: 'pending' | 'approved' | 'rejected' | 'blocked' | null
  hasAccessedAccountSpace?: boolean
}

interface AuthContextType {
  user: User | null
  token: string | null
  loading: boolean
  signup: (data: any) => Promise<void>
  login: (data: any) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Load token from localStorage and fetch user on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const savedToken = localStorage.getItem('token')
        console.log('Auth init - Checking for saved token:', !!savedToken)
        
        if (savedToken) {
          setToken(savedToken)
          // Fetch user info using the saved token
          try {
            console.log('Attempting to fetch user data with token:', savedToken.substring(0, 20) + '...')
            const userData = await authApi.me()
            console.log('✓ User data fetched successfully:', userData)
            setUser(userData)
          } catch (error) {
            console.error('✗ Failed to fetch user info:', {
              message: error instanceof Error ? error.message : String(error),
              status: (error as any)?.status,
              statusText: (error as any)?.statusText,
              response: (error as any)?.response
            })
            // Clear token if it's invalid
            console.log('Clearing invalid token from localStorage')
            localStorage.removeItem('token')
            setToken(null)
            setUser(null)
          }
        } else {
          console.log('No saved token found - user is not authenticated')
        }
      } finally {
        setLoading(false)
      }
    }
    
    initAuth()
  }, [])

  const signup = async (data: any) => {
    setLoading(true)
    try {
      const response = await authApi.signup(data)
      localStorage.setItem('token', response.token)
      setToken(response.token)
      setUser(response.user)
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const login = async (data: any) => {
    setLoading(true)
    try {
      const response = await authApi.login(data)
      localStorage.setItem('token', response.token)
      setToken(response.token)
      setUser(response.user)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, signup, login, logout, isAuthenticated: !!token, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
