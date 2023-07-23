import React ,{useState,useEffect} from 'react'
import './View.scss'
import { useLocation } from 'react-router-dom'


export const View = () => {

  const location = useLocation();
  const data = location.state;
  // console.log("data",data);

    return (
      
        <div className="form-body">
          <div className="form-box">
              <form method='get'>
    
    
              <table>
                <tr>
                  <td className="tdwidth"><label htmlFor="idno" className='idone'>Complaint Name</label></td>
                  <td><span class="six">: {data.name}</span></td>
                </tr>
                <tr>
                  <td className="tdwidth"><label htmlFor="name" className='idtwo'>Date</label></td>
                  <td> <span class="two">: {data.date}</span></td>   
                </tr>
                <tr>
                <td className="tdwidth"><label htmlFor="phoneno" className='idthree'>Status</label>  </td>
                  <td> <span class="three">: {data.status}</span></td>
                </tr>
                <tr>
                  <td className="tdwidth"><label htmlFor="roomno" className='idfour'>Complaints Description </label></td>
                  <td><span class="five">: {data.description}</span></td>
                </tr>
                <tr>
                  <td className="tdwidth"><label htmlFor="year" className='idfive'>Image</label></td>
                  <td><span class="five">: {data.image}</span></td>
                </tr>
              </table>
              </form>
            </div>
          </div>
        
    )}