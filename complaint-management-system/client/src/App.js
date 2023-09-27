import React from 'react'
import { Routes, Route,Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import useAuthContext from './hooks/useAuthContext'
import Dashboard from './components/Dashboard/Dashboard'
import { Complaint } from './components/Complaint/Complaint'
import { Info } from './components/Info/Info'
import { History } from './components/History/History'
import { View } from './components/View/View'
import useAdminAuthContext from './hooks/useAdminAuthContext'
import { AdminHistory } from './components/History/AdminHistory'
import { AdminView } from './components/View/AdminView'
import NewAdminLogin from './components/Forms/NewAdminLogin'
import { AdminDashboardPage } from './adminPages/AdminDashboardPage'
import { AdminFeedback } from './adminPages/AdminFeedback'


const App = () => {
  const {user} = useAuthContext()
  const {admin} = useAdminAuthContext()
  return (
    <>
          <Routes>
            <Route 
              path='/' 
              element={user ? <HomePage/> : <Navigate to="/login"/>}/>
            <Route 
              path='/login' 
              element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route 
              path='/signup' 
              element={!user ? <Signup/> : <Navigate to="/"/>}/>
            <Route
              path='/dashboard'
              element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            <Route
              path='/complaint'
              element={user ? <Complaint/> : <Navigate to="/login"/>}/>
            <Route
              path='/history'
              element={user ? <History/> : <Navigate to="/login"/>}/>
            <Route
              path='/info'
              element={user ? <Info/> : <Navigate to="/login"/>}/>
            <Route
              path='/view'
              element={user ? <View/> : <Navigate to="/login"/>}/>



            <Route 
              path='/adminlogin' 
              element={!admin ? <NewAdminLogin/> : <Navigate to="/admindashboard"/>}/>

            <Route
              path='/admindashboard'
              element={admin ? <AdminDashboardPage/> : <Navigate to="/adminlogin"/>}/>

            <Route
              path='/adminhistory'
              element={admin ? <AdminHistory/> : <Navigate to="/adminlogin"/>}/>

            <Route
              path='/adminview'
              element={admin ? <AdminView/> : <Navigate to="/adminlogin"/>}/>

            <Route
              path='/feedback'
              element={admin ? <AdminFeedback/> : <Navigate to="/adminlogin"/>}/>
            
          </Routes>
    </>
  )
}

export default App