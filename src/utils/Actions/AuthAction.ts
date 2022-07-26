import { AuthReqPayload } from './../types/reqPayload';
import * as AuthApi from '../api/AuthApi'
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'utils/types/action';
import { toast } from 'react-toastify';
export const login:any = (formData:AuthReqPayload)=>async(dispatch: Dispatch <AuthActionTypes>) =>{
        dispatch({type:"AUTH_START"})
        try {
            
            const {data} =await AuthApi.login(formData)
            toast.success('Login successfully', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            dispatch({type:"AUTH_SUCCESS",data:data})
        } catch (error) {
            toast.error('Something Went Wrong', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            dispatch({type:"AUTH_FAIL"})
        }
    
}