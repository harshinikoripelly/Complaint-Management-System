import React, { createContext, useEffect, useState } from 'react'
import Navbar from './../Navbar/Navbar'
import './History.scss'
import { NavLink, Link } from 'react-router-dom'

import DropdownMenu from '../Menu/DropdownMenu'



export const History = () => {
  const [complaints,setComplaints] = useState([])
  
  const idno = JSON.parse(localStorage.getItem('user')).idno;

  useEffect(()=>{
    fetch("http://localhost:5000/api/user/complaint",{
      method: "GET",
      headers: {
        'idno': idno
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "complaintData")
        setComplaints(data.data);


      })
  },[])

  return (
    <div>
      <Navbar />
      <div className='history'>
      <DropdownMenu />
      <div className="history-form-body">
      <div className="history-form-box2">
          <form method='get' className='form'>
          <table class="history-table">
            <tr className='head-row'>
            <th>CName</th>
            <th>Date</th>
            <th>status</th>
            <th>view</th>
            </tr>
            {complaints.map(i => {
              return(
                <tr>
                  <td className='table-data1'>{i.name}</td>
                  <td className='table-data2'>{i.date}</td>
                  <td className='table-data3'>
                  {i.status}
                  </td>
                  <td className='table-data4'><Link to={'/view'} state={i}>View</Link></td>
                </tr>
              )
            })}

          </table>
         


          </form>
          </div>
          </div>
          </div>
    </div>
  )
}
