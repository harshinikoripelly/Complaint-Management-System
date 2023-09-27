import React,{useState} from 'react'
import './AdminNavbar.scss'


import logo from '../../images/CMS.png'
import profile from '../../images/profile.png'

const AdminNavbar = () => {

const name = JSON.parse(localStorage.getItem('admin')).name;

  console.log(name);

  return (
    <>
      <div className="admin-nav-container">
        <nav className="admin-navbar">

          <div className="admin-nav-flex">
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

            <div className='admin-nav-user'>
                <img src={profile} width='8%' />
                <span className='name'>{name}</span>
            </div>

          </div>


        </nav>
      </div>
    </>
  )
}


export default AdminNavbar