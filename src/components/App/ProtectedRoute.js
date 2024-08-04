import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ element }) => {
  const { authAccessToken } = useSelector((state) => state.auth)
  const authToken = sessionStorage.getItem('authAccessToken')

  return authAccessToken || authToken ? element : <Navigate to='/' replace />
}

export default ProtectedRoute
