import { userActionTypes } from './../types/action';
import { Dispatch } from "react";
import { AuthActionTypes } from "utils/types/action";
import { AuthReqPayload } from "utils/types/reqPayload";
import * as userApi from '../api/UserApi'
import { toast } from 'react-toastify';
export const updateUser:any = (formData:AuthReqPayload,userId:string)=>async(dispatch: Dispatch <userActionTypes>) =>{
    dispatch({type:"UPDATE_START"})
    try {
        dispatch({type:"UPDATE_START"})
         const {data} =await userApi.updateUser(formData,userId)
         toast.success('User Updated successfully', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
         dispatch({type:"UPDATE_SUCCESS",data:data})
    } catch (error:any) {
        var errMsg
        if (error.response.data.message) 
            errMsg=error.response.data.message
        else
            errMsg=error.response.data
        toast.error(errMsg, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        dispatch({type:"UPDATE_FAIL"})
    }
}