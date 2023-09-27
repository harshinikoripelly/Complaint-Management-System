import React, { createContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import useSignup from '../../hooks/useSignup'
import AdminDropdownMenu from '../Menu/AdminDropDownMenu'
import AdminNavbar from '../Navbar/AdminNavbar'
import './AdminHistory.scss'

export const AdminHistory = () => {
  const [complaints,setComplaints] = useState([])
  const [category,setCategory] = useState("All")
  
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

  const handleCategory = (e) =>{
    setCategory(e.target.value);
  }

  const handleStatus = async (value,i) => {
    console.log(value);

    await updateComplaint(i._id,i.idno,i.category,i.name,i.description,i.date,value,i.feedback,i.feedback);

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
      <AdminNavbar/>
      <div className='admin-history'>
      <AdminDropdownMenu/>


      <div className="adminhistory-form-body">
      <div className='sortby'>
        <span className='sort'>Sort by&nbsp;</span>
        <div class="dropdownmain box-item">
                    <select name="category" class="dropdownbox" id="category" value={category} onChange={handleCategory}>
                        <option  class="items2">All</option>
                        <option  class="items">Electrical</option>
                        <option  class="items">Plumbing</option>
                        <option class="items">Carpentering</option>
                        <option class="items">Cleaning</option>
                        <option class="items">Security</option>
                        <option class="items">Others</option>
                    </select>
        </div>
      </div>
      <div className="adminhistory-form-box">

          <form method='get'>


          <table className='adminhistory-table'>
            <tr>
            <th className='table-data1'>ID</th>
            <th className='table-data2'>COMPLAINT</th>
            <th className='table-data3'>DATE</th>
            <th className='table-data4'>STATUS</th>
            <th className='table-data5'>VIEW</th>
            </tr>
            {category === "All" && complaints.map(i => {
              return(
                <tr>
                  <td className='table1'>{i.idno}</td>
                  <td className='table2'>{i.name}</td>
                  <td className='table3'>{i.date.substring(0,10)}</td>
                  <td className='table4'>
                  <div class="dropdownmain box-item">
                    {i.status === "Pending" && statusOptions1(i) || i.status === "InProgress" && statusOptions2(i) || i.status === "Completed" && statusOptions3(i)}
                  </div>
                  </td>
                  <td className='table5'><Link to={'/adminview'} state={i}>View</Link></td>
                </tr>
              )
            })}
            {category !== "All" && complaints.filter(comp => comp.category === category).map(i => {
              return(
                <tr>
                  <td className='table1'>{i.idno}</td>
                  <td className='table2'>{i.name}</td>
                  <td className='table3'>{i.date.substring(0,10)}</td>
                  <td className='table4'>
                  <div class="dropdownmain box-item">
                    {i.status === "Pending" && statusOptions1(i) || i.status === "InProgress" && statusOptions2(i) || i.status === "Completed" && statusOptions3(i)}
                  </div>
                  </td>
                  <td className='table5'><Link to={'/adminview'} state={i}>View</Link></td>
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
