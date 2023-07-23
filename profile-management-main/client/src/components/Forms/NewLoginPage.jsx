import React,{useState} from 'react'
import {useLogin} from './../../hooks/useLogin'
import { Link, useNavigate  } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import './NewLoginPage.scss'
import pic from '../../images/comp.png'

const NewLoginPage = () => {
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
          <div className='main-body2'>

            <div className="form-inner-body3" onSubmit={LoginUser}>
            <form method='post'>

            <div className='form-box3'>

            <div  className='acc2'>
                <h3>Login </h3>
            </div>


            <div className="input-group4">
            <input type="text" value={FormData.idno} onChange={handleinput} placeholder='ID' name="idno" id="idno" />
            </div>

            <div className="input-group4">
            <input type="password" value={FormData.password} onChange={handleinput} placeholder='Password' name="password" id="password" />
            </div>


            <div className="input-group5">
            <button className='btn' type="submit">Submit</button>
            </div>
            <p className='acc3'>Login as ADMIN ? <Link to={'/adminlogin'}>Login</Link></p>
            <p className='acc3'>Don't have account yet ? <Link to={'/signup'}>Sign up</Link></p>

            </div>
        </form>
  

        </div>
        <div className='image-first2'>
                <img src={pic} height='100%'/>
            </div>
        </div>
  


      </>
    )
  }
  

export default NewLoginPage