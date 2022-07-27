import { authResPayload } from 'utils/types/resPayload';
export type  AuthActionTypes =
{
    type:"AUTH_START"

}|
{
    type:"AUTH_SUCCESS",
    data:any

}|
{
    type:"AUTH_FAIL"

}|
{
    type:"LOGOUT"

}
export type userActionTypes =
{
    type:"UPDATE_START"

}|
{
    type:"UPDATE_SUCCESS",
    data:authResPayload

}|
{
    type:"UPDATE_FAIL"

}
