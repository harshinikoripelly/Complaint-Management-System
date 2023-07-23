import React from 'react'
import AdminDropdownMenu from '../components/Menu/AdminDropDownMenu'
import Navbar from '../components/Navbar/Navbar'

export const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>
      <AdminDropdownMenu/>
    </div>
  )
}
