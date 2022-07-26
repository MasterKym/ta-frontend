import { AuthActionType } from 'utils/Actions/ActionTypes';
interface authData{
    user:{firstname:string ,lastname:string,password:string,email:string,username:string}
    token :string
}
interface State {
    authData:authData|null,
    loading:boolean
    error:boolean
}

export const authReducer=(state:State={authData:null,loading:false,error:false},action:AuthActionType)=>{
    switch (action.type){
        case "AUTH_START":
            return {...state,loading:true}
            break
        case "AUTH_SUCCESS":
            return {...state,authData:action?.data}
            break
        case "AUTH_FAIL":
            return {...state,error:true}
            break
        default:
            return {...state,error:false}
    }

}
