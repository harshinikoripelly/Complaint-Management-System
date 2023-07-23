import {useContext} from 'react'
import {AuthContext} from './../context/AuthContext'

const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    console.log('useAuthContext',context);
    return context;
}
export default useAuthContext