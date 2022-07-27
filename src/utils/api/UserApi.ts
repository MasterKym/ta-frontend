import axios, { AxiosRequestConfig } from 'axios'
import { AuthReqPayload } from 'utils/types/reqPayload'
import { authResPayload } from 'utils/types/resPayload'
const Api =axios.create({baseURL:"http://localhost:5000"})
Api.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        if (req.headers) {
            req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem('profile') as any)?.token}`
            console.log(JSON.parse(localStorage.getItem('profile') as any)?.token)
        }
    }
    return req
})
export const updateUser=(formdata:AuthReqPayload,userId:string)=>Api.put<authResPayload>(`/user/update/${userId}`,formdata)


