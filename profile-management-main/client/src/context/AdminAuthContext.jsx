import { createContext,useReducer,useEffect } from "react";

export const AdminAuthContext = createContext();

export const authReducer = (state,action) => {
    switch (action.type) {
        case 'LOGIN':
            return {admin:action.payload}
            break;
        case 'LOGOUT':
            return {admin:null}
        default:
            return state
            break;
    }
}

export const AdminAuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        admin:null
    })

    useEffect(() => {
        console.log("authcontext useEffect")
      const admin = JSON.parse(localStorage.getItem('admin'))
      console.log('authcontext user',admin);
      if(admin){
        dispatch({type:'LOGIN',payload:admin})
      }
    }, [])
    
    console.log('authcontext state',state);

    return (
        <AdminAuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AdminAuthContext.Provider>
    )
}