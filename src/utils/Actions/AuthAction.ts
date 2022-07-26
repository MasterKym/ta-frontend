import { AuthActionType } from 'utils/Actions/ActionTypes';
import * as AuthApi from '../api/AuthApi'
import { Dispatch } from 'redux';
export const login:any = (formData:any)=>async(dispatch: Dispatch <AuthActionType>) =>{
        dispatch({type:"AUTH_START"})
        try {
            console.log("hhhhhh")
            const {data}=await AuthApi.login(formData)
            dispatch({type:"AUTH_SUCCESS",data:data})
        } catch (error) {
            console.log("ffffffffff")
            dispatch({type:"AUTH_FAIL"})
        }
    
}