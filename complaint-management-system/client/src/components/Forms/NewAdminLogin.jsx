import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import './NewLoginPage.scss'
import { useAdminLogin } from '../../hooks/useAdminLogin'
import pic from '../../images/comp.png'


const NewAdminLogin = () => {
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
                <div className='main-body2'>

<div className="form-inner-body3" onSubmit={LoginAdmin}>
<form method='post'>

<div className='form-box3'>

<div  className='acc2'>
    <h3>Login As Admin </h3>
</div>


<div className="input-group4">
<input type="text" value={FormData.name} onChange={handleinput} placeholder='Name' name="name" id="name" />
</div>

<div className="input-group4">
<input type="password" value={FormData.password} onChange={handleinput} placeholder='Password' name="password" id="password" />
</div>


<div className="input-group5">
<button className='btn' type="submit">Submit</button>
</div>
<p className='acc3'>Login as STUDENT?&nbsp; <Link to={'/login'}><span className='snlink'>Login</span></Link></p>
<p className='acc3'>Don't have account yet?&nbsp; <Link to={'/signup'}><span className='snlink'>Sign Up</span></Link></p>

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
  

export default NewAdminLogin