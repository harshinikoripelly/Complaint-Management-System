import React,{useRef, useState} from 'react'
import DropdownMenu from '../Menu/DropdownMenu';
import './Complaint.scss'
import Navbar from '../Navbar/Navbar';

import useSignup from './../../hooks/useSignup'


export const Complaint = () => {

  const {signup,isLoading,error,success,register} = useSignup()
  const idno = JSON.parse(localStorage.getItem('user')).idno;


  const [FormData, setFormData] = useState({
    category:"",
    name:"",
    description:"",
    image:"",
  });

  let name,value;
  
  //date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



  const handleinput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setFormData({...FormData,[name]:value});
  }

  const RegisterComplaint = async (e) =>{
    e.preventDefault();
    const {category,name,description,image} = FormData;

    await register(idno,category,name,description,"",new Date(),"Pending");

  }


  return (
    <>
    <Navbar />
    <div className='complaint'>
      <DropdownMenu />
    <div className='complaint-main'>
      <div className="complaint-form-body2">
      <div className="complaint-form-box2">
        <div className="complaint-form-header2">
          <h3>Register a Complaint</h3>
        </div>
        <div className="complaint-form-inner-body2" onSubmit={RegisterComplaint}>
          <form method='post'>
            <div className="input-group">
               <div className="input-type">
               <span for="dog-names" className="dropdown box-name">Category</span>
              <div class="dropdownmain box-item">
                  <select name="category" class="dropdownbox" id="category" value={FormData.category} onChange={handleinput}>
                      <option  class="items2">Select a Category</option>
                      <option  class="items">Electrician</option>
                      <option  class="items">Plumber</option>
                      <option class="items">Carpenter</option>
                      <option class="items">Cleaning</option>
                      <option class="items">Security</option>
                  </select>
            </div>
            </div>
            </div>
            <div className="input-group">
              <div className="input-type">
              <span htmlFor="username" className='box-name'>Complaint Name</span>
              <input  className='box-item'
              value={FormData.name}
              onChange={handleinput}
              placeholder='Complaint Name' 
              type="text"
              name="name"
              id="name" 
              required />
              </div>
              <div className="input-group">
              <div className="input-type">
                <span className='box-name'>Description</span>
                <input className="box-itenm" 
                value={FormData.description}
                name="description"
                id="description"
                onChange={handleinput}
                type="textarea" 
                placeholder='Write a description of your Complaint'/>
              </div>
              </div>
            </div>
            <div className="input-group">
              <button className='btn' type="submit">Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
