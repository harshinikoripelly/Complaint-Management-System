import React, { createContext, useEffect, useState } from 'react'
import Navbar from './../Navbar/Navbar'
import './History.scss'
import { NavLink, Link } from 'react-router-dom'

import useSignup from '../../hooks/useSignup'
import DropdownMenu from '../Menu/DropdownMenu'
import AdminDropdownMenu from '../Menu/AdminDropDownMenu'



export const AdminHistory = () => {
  const [complaints,setComplaints] = useState([])
  
  const idno = JSON.parse(localStorage.getItem('admin')).idno;

  const {signup,isLoading,error,success,register,updateComplaint} = useSignup()

  useEffect(()=>{
    fetch("http://localhost:5000/api/user/complaints",{
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "complaintData")
        setComplaints(data.data);


      })
  },[])

  

  const handleStatus = async (value,i) => {
    console.log(value);

    await updateComplaint(i._id,i.idno,i.category,i.name,i.description,i.image,i.date,value);

  }

  const statusOptions1 = (i) => {
    return(
      <>
      <select name="category" class="dropdownbox" id="category" onChange={(e) => handleStatus(e.target.value,i)}> 
      <option class="items" selected disabled>Pending</option>   
      <option  class="items">InProgress</option>
      <option  class="items">Completed</option>
      </select>
      </>
    )
  }

  const statusOptions2 = (i) => {
    return(
      <>
      <select name="category" class="dropdownbox" id="category" onChange={(e) => handleStatus(e.target.value,i)}> 
      <option class="items" selected disabled>InProgress</option>   
      <option  class="items">Completed</option>
      <option class="items" disabled>Pending</option>  
      </select>
      </>
    )
  }

  const statusOptions3 = (i) => {
    return(
      <>
      <select name="category" class="dropdownbox" id="category" onChange={(e) => handleStatus(e.target.value,i)}> 
      <option class="items" selected disabled>Completed</option>   
      <option class="items" disabled>Pending</option>
      <option class="items" disabled>InProgress</option>
      </select>
      </>
    )
  }


  return (
    <div>
      <Navbar />
      <div className='history'>
      <AdminDropdownMenu/>
      <div className="form-body">
      <div className="form-box">
          <form method='get'>


          <table>
            <tr>
            {/* <th>Id</th> */}
            <th>CName</th>
            <th>Date</th>
            <th>status</th>
            <th>view</th>
            </tr>
            {complaints.map(i => {
              return(
                <tr>
                  {/* <td>{count}</td> */}
                  <td>{i.name}</td>
                  <td>{i.date}</td>
                  <td>
                  <div class="dropdownmain box-item">
                    {i.status === "Pending" && statusOptions1(i) || i.status === "InProgress" && statusOptions2(i) || i.status === "Completed" && statusOptions3(i)}
                    {/* <select name="category" class="dropdownbox" id="category" onChange={(e) => handleStatus(e.target.value,i)}>    
                    <option  class="items">Completed</option>
                    <option  class="items">InProgress</option>
                    <option class="items" selected>Pending</option>
                    </select> */}
                  </div>
                  </td>
                  <td><Link to={'/adminview'} state={i}>View</Link></td>
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
