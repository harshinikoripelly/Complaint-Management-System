import { useState } from "react";
import useAuthContext from './useAuthContext'
const useSignup = () => {
    const [error, setError] = useState(null)
    const [success, setsuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (idno,name,phoneno,roomno,year,password)=>{
        setIsLoading(true)
        setError(null);

        const response = await fetch('/api/user/signup',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({idno,name,phoneno,roomno,year,password})
        })

        const json = await response.json();
        console.log('useSignUp',json);
        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){

            localStorage.setItem('user',JSON.stringify(json))
            setsuccess('User has been created successfully')
            dispatch({
                type:'LOGIN',
                payload:json
            })

            setIsLoading(false)
        }
    }

    const register = async (idno,category,name,description,image,date,status)=>{




        const response = await fetch('/api/user/complaint',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({idno,category,name,description,image,date,status})
        })

        const json = await response.json();
        console.log('register complaint',json);

    }

    const updateComplaint = async (_id,idno,category,name,description,image,date,status)=>{


        console.log(_id,idno,category,name,description,image,date,status);

        const response = await fetch('/api/user/history',{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({_id,idno,category,name,description,image,date,status})
        })

        const json = await response.json();
        // console.log('register complaint',json);

    }

    const updateUserInfo = async (_id,idno,name,phoneno,roomno,year,password)=>{


        console.log(_id,idno,name,phoneno,roomno,year,password);

        const response = await fetch('/api/user/info',{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({_id,idno,name,phoneno,roomno,year,password})
        })

        const json = await response.json();
    }

    return {signup,isLoading,error,success,register,updateComplaint,updateUserInfo}
}

export default useSignup