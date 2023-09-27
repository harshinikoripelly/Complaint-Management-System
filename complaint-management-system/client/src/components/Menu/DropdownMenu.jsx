import React from 'react'
import './DropdownMenu.scss'
import { NavLink, Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import useAuthContext from '../../hooks/useAuthContext'

const DropdownMenu = () => {
    const {user} = useAuthContext()
    const {logout} = useLogout()
    const handleclick = () =>{
      logout()
    }
      
      return (
        <>
          <div className="drodown-box" >
            <hr className='rule' />
            <ul className="dropdown-item">
              <li>
              <Link to={'/dashboard'}>Dashboard</Link>
              </li>
              <li>
              <Link to={'/complaint'}>Register a Complaint</Link>
              </li>
              <li>
              <Link to={'/history'}>Complaints History</Link>
              </li>
              <li>
              <Link to={'/info'}>Personal Info</Link>
              </li>
              <li className='logoutBtn'>
                <NavLink onClick={handleclick} className='btn btn-dark btn-icon'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )
    }


export default DropdownMenu;