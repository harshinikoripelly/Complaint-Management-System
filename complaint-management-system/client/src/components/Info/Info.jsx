import React, { useState, useEffect } from 'react'

import useSignup from '../../hooks/useSignup'
import Navbar from '../Navbar/Navbar';
import DropdownMenu from '../Menu/DropdownMenu';
import './Info.scss'

export const Info = () => {

  const {updateUserInfo} = useSignup()

  const idno = JSON.parse(localStorage.getItem('user')).idno;

  const [mainId, setMainId] = useState('')
  const [idnumber,setIdno] = useState('')
  const [name,setName] = useState('')
  const [phoneno,setPhoneno] = useState('');
  const [roomno,setRoomno] = useState('')
  const [year,setYear] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
    fetch("http://localhost:5000/api/user/info",{
      method: "GET",
      headers: {
        'idno': idno
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMainId(data.data._id)
        setIdno(data.data.idno)
        setName(data.data.name)
        setPhoneno(data.data.phoneno)
        setRoomno(data.data.roomno)
        setYear(data.data.year)
        setPassword(data.data.password)
      })
  },[])

  const handlePhoneno = (e) => {
      setPhoneno(e.target.value);
  }

  const handleRoomno = (e) => {
    setRoomno(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }
  
  const handleEdit = () => {
    console.log(phoneno,roomno,year);
    
    updateUserInfo(mainId,idno,name,phoneno,roomno,year,password)
  }

  return (
    <>
    <Navbar />
    <div className='info'>
      <DropdownMenu/>
    <div className="info-form-body">
      
      <div className="info-form-box">
            <table>
            <tr>
              <td><label htmlFor="idno">ID </label></td>
              <td>
                <span class="info-val">{idno}</span>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="name">Name </label></td>
              <td> <span class="info-val">{name}</span></td>
            </tr>
            <tr>
              <td ><label htmlFor="phoneno">Phone No </label>  </td>
              <td>
                 <input value={phoneno} onChange={(e) => handlePhoneno(e)} />
              </td>
            </tr>
            <tr>
              <td ><label htmlFor="roomno">Room No </label></td>
              <td><input value={roomno} onChange={(e) => handleRoomno(e)} /></td>
            </tr>
            <tr>
              <td><label htmlFor="year">Year and Branch   </label></td>
              <td><input value={year} onChange={(e) => handleYear(e)} /></td>
            </tr>
          </table>
          <div className="info-btn-class">
              <button className='btn9' type="submit" onClick={handleEdit}>Edit</button>
            </div>

        </div>
      </div>
      </div>
    </>
  )
}
export default Info