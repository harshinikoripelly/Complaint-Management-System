import React, { useEffect, useState } from 'react'
import AdminDropdownMenu from '../Menu/AdminDropDownMenu'
import AdminNavbar from '../Navbar/AdminNavbar'
import './Feedback.scss'
import { Link } from 'react-router-dom'

export const Feedback = () => {
    const [complaints,setComplaints] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/user/complaints",{
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setComplaints(data.data);
            console.log("complaints",complaints)
          })
      },[])

 const feed = (complaint) => {
    return(
      <Link to={'/adminview'} state={complaint}>
          <div className='fb'>
          <div className='fb-one'>
            <span>{complaint.idno}</span>
            <span>{complaint.feedbackdate.substring(0,10)}</span>
          </div>
          <span>{complaint.feedback}</span>
          </div>

    </Link>
    )
 } 

  return (
    <>
    <AdminNavbar/>
    <div className='feedback'>
        <AdminDropdownMenu/>
        
        <div className='fb-main'>
            <h1>FEEDBACK</h1>
            {complaints.length === 0 && "No feedbacks"}
            {complaints.map(complaint => {
                return(
                    <>
                    {complaint.feedback != ""  && feed(complaint)}
                    </>
                )
            })}

        </div>
    </div>
    </>
  )
}
