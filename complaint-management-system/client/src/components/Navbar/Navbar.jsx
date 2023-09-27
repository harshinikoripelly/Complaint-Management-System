import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import useAuthContext from './../../hooks/useAuthContext'

import logo from '../../images/CMS.png'
import profile from '../../images/profile.png'

const Navbar = () => {
const {user} = useAuthContext()

const name = JSON.parse(localStorage.getItem('user')).name;
const idno = JSON.parse(localStorage.getItem('user')).idno;

  console.log(name);

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">

          <div className="nav-flex">
              <div className='logo-item'>
                  <img src={logo} height='37px' />
              </div>
            {/* <div className="primary-menu">
              <ul className="menu">
                <li>
                  <NavLink to="/" className='menu-item'>Home</NavLink>
                </li>
              </ul>
            </div> */}

            <div className='nav-user'>
                <img src={profile} width='8%' />
                <span className='name'>{name}</span>
            </div>

          </div>


        </nav>
      </div>
    </>
  )
}


export default Navbar