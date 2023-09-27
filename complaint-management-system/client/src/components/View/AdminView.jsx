import React ,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import AdminNavbar from '../Navbar/AdminNavbar';
import './AdminView.scss'


export const AdminView = () => {

  const location = useLocation();
  const data = location.state;

    return (
      <>
      <div className='adminview'>

      <AdminNavbar/>

        <div className="adminview-form-body">
          <div className="adminview-form-box">
              <form method='get'>
              <table>
                <tr>
                  <td className='heading'>Complaint Name</td>
                  <td className='data'>: {data.name}</td>
                </tr>
                <tr>
                  <td className='heading'>Date</td>
                  <td className='data'>: {data.date.substring(0,10)}</td>   
                </tr>
                <tr>
                <td className='heading'>Status</td>
                  <td className='data'>: {data.status}</td>
                </tr>
                <tr>
                  <td className='heading' >Complaints Description </td>
                  <td className='data'>: {data.description}</td>
                </tr>
              </table>
              </form>

            </div>

          </div>
          </div>
      
          </>
    )}