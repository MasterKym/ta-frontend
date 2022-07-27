export  interface authResPayload{
    user:{firstname:string ,lastname:string,password:string,email:string,username:string,phoneNumber:string,dateOfBirth:string}
    token?:string
}