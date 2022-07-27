import { AuthActionTypes, userActionTypes } from 'utils/types/action';
import { AuthState } from 'utils/types/states';


export const authReducer=(state:AuthState={authData:null,loading:false,error:false},action:AuthActionTypes|userActionTypes)=>{
    switch (action.type){
        case "AUTH_START":
            return {...state,loading:true}
            break
        case "AUTH_SUCCESS":
            return {...state,authData:action?.data,loading:false}
            break
        case "AUTH_FAIL":
            return {...state,error:true,loading:false}
            break
        case "LOGOUT":
            return {...state,authData:null}
        case "UPDATE_START":
            return {...state,loading:true}
            break
        case "UPDATE_SUCCESS":
            return {...state,authData:{...state.authData,user:action?.data},loading:false}
            break
        default:
            return {...state,error:false,loading:false}
    }

}
