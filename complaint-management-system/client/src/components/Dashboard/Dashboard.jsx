import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.scss'
import Navbar from '../Navbar/Navbar'
import DropdownMenu from '../Menu/DropdownMenu'
import pend from '../../images/pending.png'
import prog from '../../images/progresss.png'
import comp from '../../images/completed.png'


const Dashboard = () => {
  const [complaints,setComplaints] = useState([])

  const [pendingCount,setpendingCount] = useState(0)
  const [progressCount,setprogressCount] = useState(0)
  const [completedCount,setcompletedCount] = useState(0)
  
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

        setpendingCount(0)
        setprogressCount(0)
        setcompletedCount(0)
        data.data.map(complaint => {
          if(complaint.status === "Pending") {
            setpendingCount(prevCount => prevCount+1);
          }
          else if(complaint.status === "InProgress") {
            setprogressCount(prevCount => prevCount+1)
          }else {
            setcompletedCount(prevCount => prevCount+1)
          }
        })
       console.log(pendingCount,progressCount,completedCount)
      })

  },[])
  
  return (
    <>
            <Navbar />
            <div col-md-12>
            <div className='content'  col-md-4>
            <DropdownMenu />

            <div className='cards'>
          {/* Pending */}
        <div className='main'>
          <div class = "card">
            <h1>{pendingCount}</h1>
            <div class="card-content">
              <div className='head'>
              <h2>
                Pending
              </h2>
              <img src={pend} width='11%' height='11%'/>
              </div>
              <p>
              There {pendingCount === 1? "is" : "are"} {pendingCount} {pendingCount === 1? "complaint" : "complaints"} to be finished.
              </p>
            </div>
          </div>
        </div>


            {/* Progress */}
            <div className='main'>
          <div class = "card">
            <h1>{progressCount}</h1>
            <div class="card-content">
              <div className='head'>
              <h2>
                In Progress
              </h2>
              <img src={prog} width='11%' height='11%'/>
              </div>
              <p>
               There {progressCount === 1? "is" : "are"} {progressCount} {progressCount === 1? "complaint" : "complaints"} that {progressCount === 1? "is" : "are"} in progress.
              </p>
            </div>
          </div>
        </div>

        {/* Completed */}

        <div className='main'>
          <div class = "card">
            <h1>{completedCount}</h1>
            <div class="card-content">
              <div className='head'>
              <h2>
                Completed
              </h2>
              <img src={comp} width='11%' height='11%'/>
              </div>
              <p>
                There {completedCount === 1? "is" : "are"} {completedCount} {completedCount === 1? "complaint" : "complaints"} that {completedCount === 1? "is" : "are"} successfully completed.
              </p>
            </div>
          </div>
        </div>
        </div>

            </div>
            </div>
    </>
  )
}


export default Dashboard