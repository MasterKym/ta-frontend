import axios from 'axios'
import { AuthReqPayload } from 'utils/types/reqPayload'
import { authResPayload } from 'utils/types/resPayload'
const Api =axios.create({baseURL:"http://localhost:5000"})
export const updateUser=(formdata:AuthReqPayload,userId:string)=>Api.put<authResPayload>(`/user/update/${userId}`,formdata)