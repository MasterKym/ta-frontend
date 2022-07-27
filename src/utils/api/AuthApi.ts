
import axios from 'axios'
import { AuthReqPayload } from 'utils/types/reqPayload'
import { authResPayload } from 'utils/types/resPayload'
const Api =axios.create({baseURL:"http://localhost:5000"})
export const login =(data:AuthReqPayload)=>Api.post<authResPayload>('/auth/login',data)
export const signup =(data:AuthReqPayload)=>Api.post<authResPayload>('/auth/signup',data)