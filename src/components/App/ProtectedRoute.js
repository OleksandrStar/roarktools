import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ element }) => {
  const { authAccessToken } = useSelector((state) => state.auth)
  console.log('authAccessToken', authAccessToken)
  console.log('element', element)
  return authAccessToken ? element : <Navigate to='/' replace />
}

export default ProtectedRoute
