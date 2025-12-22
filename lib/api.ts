const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  // Merge existing headers
  if (options.headers) {
    const existingHeaders = new Headers(options.headers)
    existingHeaders.forEach((value, key) => {
      headers.set(key, value)
    })
  }

  // Add token if available
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }))
      const customError = new Error(error.error || 'API request failed')
      Object.assign(customError, {
        status: response.status,
        statusText: response.statusText,
        response: error
      })
      throw customError
    }

    return response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    const customError = new Error('Network or unknown error')
    Object.assign(customError, { originalError: error })
    throw customError
  }
}

// Auth API
export const authApi = {
  signup: (data: any) => apiCall('/api/v1/auth/signup', { method: 'POST', body: JSON.stringify(data) }),
  login: (data: any) => apiCall('/api/v1/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  me: () => apiCall('/api/v1/auth/me'),
  logout: () => apiCall('/api/v1/auth/logout', { method: 'POST' }),
}

// Blog API
export const blogApi = {
  getPosts: (query = '') => apiCall(`/api/v1/blog${query ? `?q=${query}` : ''}`),
  getPost: (slug: string) => apiCall(`/api/v1/blog/${slug}`),
}

// Market API
export const marketApi = {
  getProducts: (params: Record<string, any> = {}) => {
    const query = new URLSearchParams(params).toString()
    return apiCall(`/api/v1/market${query ? `?${query}` : ''}`)
  },
  getProduct: (id: string) => apiCall(`/api/v1/market/${id}`),
}

// Requests API
export const requestsApi = {
  getRequests: () => apiCall('/api/v1/requests'),
  createRequest: (data: any) => apiCall('/api/v1/requests', { method: 'POST', body: JSON.stringify(data) }),
  closeRequest: (id: number) => apiCall(`/api/v1/requests/${id}/close`, { method: 'PATCH' }),
}

// User API
export const userApi = {
  updateProfile: (data: any) => apiCall('/api/v1/user/profile', { method: 'PUT', body: JSON.stringify(data) }),
  updatePassword: (data: any) => apiCall('/api/v1/user/password', { method: 'PUT', body: JSON.stringify(data) }),
  updateAvatar: (avatar: string) => apiCall('/api/v1/user/avatar', { method: 'PUT', body: JSON.stringify({ avatar }) }),
  deleteAccount: () => apiCall('/api/v1/user/account', { method: 'DELETE' }),
}
