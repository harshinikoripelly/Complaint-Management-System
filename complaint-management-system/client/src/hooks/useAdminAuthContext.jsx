import {useContext} from 'react'
import { AdminAuthContext } from '../context/AdminAuthContext'

const useAdminAuthContext = () => {
    const context = useContext(AdminAuthContext)
    console.log("context",context)
    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    console.log('useAuthContext',context);
    return context;
}
export default useAdminAuthContext