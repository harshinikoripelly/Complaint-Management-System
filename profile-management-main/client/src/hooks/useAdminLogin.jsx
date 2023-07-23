import { useState } from "react";
import useAdminAuthContext from "./useAdminAuthContext";
export const useAdminLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAdminAuthContext()

    const login = async (name,password)=>{
        setIsLoading(true)
        setError(null);

        localStorage.setItem('name',name)
        localStorage.setItem('password',password)
        const response = await fetch('/api/admin/login',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,password})
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }
        if(response.ok){

            localStorage.setItem('admin',JSON.stringify(json))

            dispatch({
                type:'LOGIN',
                payload:json
            })

            setIsLoading(false)
        }
    }
    return {login,isLoading,error}
}