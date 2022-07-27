export interface AuthReqPayload {
    username:string,
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    dateOfBirth?:string,
    confirmpassword?:string,
    phoneNumber?:string,
    currentUserId?:string
}