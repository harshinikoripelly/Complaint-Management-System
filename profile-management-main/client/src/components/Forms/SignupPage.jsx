import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import Navbar from './../Navbar/Navbar'
import useSignup from './../../hooks/useSignup'
import './SignUpPage.scss'

const SignupPage = () => {
  
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

    {/* adding navabr to page */}
    <Navbar isLogin="false"/>


    <div className="form-body2">
      <div className="form-box2">
        <div className="form-header2">
          <h3>Sign up</h3>
        </div>
        <div className="form-inner-body2" onSubmit={RegisterUser}>
          <form method='post'>


            <div className='group'>

              <div className="input-group2">
                <span className="input-name">ID</span>
                <input className='input-ip' value={FormData.idno} onChange={handleinput} type="text" placeholder='ID' name="idno" id="idno" />
              </div>

              <div className="input-group2">
              <span className="input-name">Name</span>
                <input className='input-ip' value={FormData.name} onChange={handleinput} type="text" placeholder='Name' name="name" id="name" />
              </div>

            </div>


            <div className='group'>
            <div className="input-group2">
            <span className="input-name">Phoneno</span>
              <input className='input-ip' value={FormData.phoneno} onChange={handleinput} type="text" placeholder='Phone No' name="phoneno" id="phoneno" />
            </div>
            <div className="input-group2">
            <span className="input-name">Roomno</span>
              <input className='input-ip' value={FormData.roomno} onChange={handleinput} type="text" placeholder='Room No' name="roomno" id="roomno" />
            </div>
            </div>


            <div className='group'>
            <div className="input-group2">
              <span className="input-name">Year&Branch</span>
              <input className='input-ip' value={FormData.year} onChange={handleinput} type="text" placeholder='Year and Branch' name="year" id="year" />
            </div>
            <div className="input-group2">
            <span className="input-name">Password</span>
              <input className='input-ip' value={FormData.password} onChange={handleinput} type="password" placeholder='Password' name="password" id="password" />
            </div>
            </div>



            <div className="input-group2">
              <button className='btn' type="submit">Submit</button>
            </div>
          </form>
          <p className='acc'>Already have account ? <Link to={'/login'}>Sign in</Link></p>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default SignupPage