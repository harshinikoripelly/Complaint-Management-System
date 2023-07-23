import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import {useLogout}  from './../../hooks/useLogout'
import useAuthContext from './../../hooks/useAuthContext'

import logo from '../../images/CMS.png'

const Navbar = () => {
const {user} = useAuthContext()

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">

          

          <div className="nav-flex">
              <div className='logo-item'>
                  <img src={logo} height='37px' />
              </div>
            <div className="primary-menu">
              <ul className="menu">
                <li>
                  <NavLink to="/" className='menu-item'>Home</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {!user && (<LoginMenu />)}
        </nav>
      </div>
    </>
  )
}

const DropdownMenu = () => {
const {user} = useAuthContext()
const {logout} = useLogout()
const handleclick = () =>{
  logout()
}
  const [open, setopen] = useState('');
  //it will help to show and hide dropdown menu bar.
  function Toggle_dropdown(){
    (open === "active")? setopen('') : setopen('active');
  }
  
  return (
    <>
    <div className="right-menu">
      <div className="dropdown-menu" onClick={() => Toggle_dropdown()}>
        <div className="user-pic">
        </div>
        <div className="user-data">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className={"drodown-box " + open}>
        <hr className='rule' />
        <ul className="dropdown-item">
          <li>
            <NavLink to="">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="">Register a Complaint</NavLink>
          </li>
          <li>
            <NavLink to="">Complaints History</NavLink>
          </li>
          <li>
            <NavLink to="">Personal Info</NavLink>
          </li>
          <li className='logoutBtn'>
            <NavLink onClick={handleclick} className='btn btn-dark btn-icon'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

const LoginMenu = () => {
  return (
    <>
      <div className="right-menu">
        <NavLink to="/signup" className='btn btn-light btn2'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"></svg>
        <span className='btn2'>Sign up</span>
        </NavLink>
        <NavLink to="/login" className='btn btn-dark btn-icon'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
          <span >Sign in</span>
        </NavLink>
      </div>
    </>
  )
}

export default Navbar