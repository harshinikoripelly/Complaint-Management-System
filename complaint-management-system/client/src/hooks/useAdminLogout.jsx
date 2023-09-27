import useAdminAuthContext from "./useAdminAuthContext";

export const useAdminLogout = () =>{
    const {dispatch} = useAdminAuthContext()
    const logout = () =>{
        //remove admin from localstrage
        localStorage.removeItem('admin');
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}