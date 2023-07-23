import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Navbar from './../Navbar/Navbar'
import useSignup from './../../hooks/useSignup'
import './NewSignUp.scss'

import pic from '../../images/form.jpg'

const NewSignUp = () => {
  
  const {signup,isLoading,error,success,register} = useSignup()


  const [FormData, setFormData] = useState({
    id:"",
    name:"",
    phoneno:"",
    roomno:"",
    year:"",
    password:""
  });

  let name,value;

  const handleinput = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setFormData({...FormData,[name]:value});
  }

  const RegisterUser = async (e) =>{
    e.preventDefault();
    const {idno,name,phoneno,roomno,year,password} = FormData;
    await signup(idno,name,phoneno,roomno,year,password);
  }

  return (
    <>
    <div className='main-body'>

        <div className='image-first'>
            <img src={pic} height='100%'/>
            {/* Imagee */}
        </div>



        <div className="form-inner-body2" onSubmit={RegisterUser}>
          <form method='post'>

        <div className='form-box2'>

            <div  className='acc'>
                <h3>Create an account</h3>
            </div>


            <div className='group'>

              <div className="input-group2">
                <input className='input-ip' value={FormData.idno} onChange={handleinput} type="text" placeholder='ID' name="idno" id="idno" />
              </div>

              <div className="input-group2">
                <input className='input-ip' value={FormData.name} onChange={handleinput} type="text" placeholder='Name' name="name" id="name" />
              </div>

            </div>


            <div className='group'>
            <div className="input-group2">
              <input className='input-ip' value={FormData.phoneno} onChange={handleinput} type="text" placeholder='Phone No' name="phoneno" id="phoneno" />
            </div>
            <div className="input-group2">
              <input className='input-ip' value={FormData.roomno} onChange={handleinput} type="text" placeholder='Room No' name="roomno" id="roomno" />
            </div>
            </div>


            <div className='group'>
                <div className="input-group2">
                <input className='input-ip' value={FormData.year} onChange={handleinput} type="text" placeholder='Year and Branch' name="year" id="year" />
                </div>
                
                <div className="input-group2">
                <input className='input-ip' value={FormData.password} onChange={handleinput} type="password" placeholder='Password' name="password" id="password" />
                </div>
            </div>



            <div className="input-group3">
              <button className='btn' type="submit">Submit</button>
            </div>
            <p className='acc'>Already have account ? <Link to={'/login'}>Sign in</Link></p>

            </div>
          </form>
          

        </div>
      </div>

    
    </>
  )
}

export default NewSignUp