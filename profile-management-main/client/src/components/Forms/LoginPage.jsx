import React,{useState} from 'react'
import {useLogin} from './../../hooks/useLogin'
import { Link, useNavigate  } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import './Form.scss'

const LoginPage = () => {
  let navigate = useNavigate();
    const [FormData, setFormData] = useState({
      idno:"",
      password:""
    });
    let name,value;
  
    const handleinput = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setFormData({...FormData,[name]:value});
    }
    
    
    const {login,isLoading,error} = useLogin()
    const LoginUser = async (e) =>{
      e.preventDefault();
      console.log(FormData);
  
      const {idno,password} = FormData;
      await login(idno,password)
      if(error != null){
        return navigate("/");
      }
  
    }
  
  
  
    return (
      <>
      
      <Navbar/>

      <div className="form-body2">
        <div className="form-box2">
          <div className="form-header2">
            <h3>Sign in</h3>
          </div>
          <div className="form-inner-body2">
            <form method="post" onSubmit={LoginUser}>
              <div className="input-group">
                <span className='id2'>ID</span>
                <input type="text" value={FormData.idno} onChange={handleinput} placeholder='ID' name="idno" id="idno" />
                {/* <label htmlFor="idno">Email</label> */}
                
              </div>
              <div className="input-group">
                  <span className='password2'>Password</span>
                  <input type="password" value={FormData.password} onChange={handleinput} placeholder='Password' name="password" id="password" />
                {/* <label htmlFor="password">Password</label> */}
              </div>
              <div className="input-group2">
                  <input type="checkbox" name="term" id="term" className='checkbox3' />  
                <label htmlFor='term' className="checkbox2">
                  Remember me
                </label>
              </div>
              <div className="input-group">
                <button className='btn' type="submit">Submit</button>
              </div>
            </form>
            <p className='center '>Login as ADMIN ? <Link to={'/adminlogin'}><span className='cent1'>Login</span></Link></p>
            <p className='center '>Don't have account yet ? <Link to={'/signup'}><span className='cent2'>Sign up</span></Link></p>
          </div>
        </div>
      </div>
      </>
    )
  }
  

export default LoginPage