import { AuthActionTypes } from 'utils/types/action';
import { AuthState } from 'utils/types/states';


export const authReducer=(state:AuthState={authData:null,loading:false,error:false},action:AuthActionTypes)=>{
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
        default:
            return {...state,error:false,loading:false}
    }

}
