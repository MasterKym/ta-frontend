import {authResPayload } from "./resPayload"

export interface AuthState {
    authData:authResPayload|null,
    loading:boolean
    error:boolean
}
