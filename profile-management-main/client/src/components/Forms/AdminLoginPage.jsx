import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import './Form.scss'
import { useAdminLogin } from '../../hooks/useAdminLogin'


const AdminLoginPage = () => {
  let navigate = useNavigate();
    const [FormData, setFormData] = useState({
      name:"",
      password:""
    });
    let name,value;
  
    const handleinput = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setFormData({...FormData,[name]:value});
    }
    
    
    const {login,isLoading,error} = useAdminLogin()
    const LoginAdmin = async (e) =>{
      e.preventDefault();
      console.log(FormData);
  
      const {name,password} = FormData;
      await login(name,password)
      if(error != null){
        return navigate("/admindashboard");
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
            <form method="post" onSubmit={LoginAdmin}>
              <div className="input-group">
              <span className='id3'>Username</span>
                <input type="text" value={FormData.name} onChange={handleinput} placeholder='Name' name="name" id="name" />
              </div>
              <div className="input-group">
              <span className='password3'>Password</span>
                <input type="password" value={FormData.password} onChange={handleinput} placeholder='Password' name="password" id="password" />
              </div>
              <div className="input-group2">
                  <input type="checkbox" name="term" id="term" />
                
                <label htmlFor='term' className="checkbox2">
                  Remember me
                </label>
              </div>
              <div className="input-group">
                <button className='btn' type="submit">Submit</button>
              </div>
            </form>
            <p className='center'>Don't have account yet ? <Link to={'/signup'}><span className='cent1'>Sign up</span></Link></p>
          </div>
        </div>
      </div>
      </>
    )
  }
  

export default AdminLoginPage