import { Form, Input, DatePicker, Button, DatePickerProps } from 'antd';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { updateUser } from 'utils/Actions/UserAction';
import { useAppSelector } from 'utils/hooks';
import { AuthReqPayload } from 'utils/types/reqPayload';
import moment from 'moment';
import './Account.scss'
import { validUsername } from 'utils/client/inputValidation';
interface AccountProps {

}

export const Account: React.FC<AccountProps> = ({}) => {
    const [form] = Form.useForm();
    const [Err, setErr] = useState<{name:string,msg:null |string}>({
        name:"",
        msg:null
    })
    const {user}=useAppSelector((state:any)=>state.authReducer.authData)
    const {loading}=useAppSelector((state:any)=>state.authReducer)
    const dispatch =useDispatch();
    const [phone, setphone] = useState<string|null>(user.phoneNumber)
    const onFormLayoutChange=()=>{

    }

    const handleChange=(e:any)=>{
        if(e.target.name==="username"){
            if (!e.target.value.length) 
                // setusernameErr("UserName is required")
                setErr({...Err,name:e.target.name,msg:"UserName is required"})
            else if (!validUsername(e.target.value))
                 setErr({...Err,name:e.target.name,msg:"UserName is invalid"})
            else
                 setErr ({name:"",msg:null})
                 setformData({...formData,[e.target.name]:e.target.value})      
        }else if(e.target.name==="password"){
            console.log("haaaaaaaaaa")
            const re = /^(?=.*\d).{8,}$/;
              // checking length
            if (e.target.value.length < 8 || e.target.value.length > 21) {
                setErr({...Err,name:e.target.name,msg:"password is invalid"})
            }else if(!re.test(e.target.value)){
                
                setErr({...Err,name:e.target.name,msg:"password is invalid"})
              
            }else{
                
                setErr({name:"",msg:null})
                
            }
            setformData({...formData,[e.target.name]:e.target.value})
        }
            else{
            setformData({...formData,[e.target.name]:e.target.value})
        }
    }
    const handleDateChange:DatePickerProps['onChange']=(e:any,dateString)=>{
        setformData({...formData,dateOfBirth:dateString})
    }

    const [formData, setformData] = useState<AuthReqPayload>({
        username:user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        password:user.password,
        dateOfBirth:user.dateOfBirth,
        phoneNumber:user.phoneNumber,
        currentUserId:user._id
    })
    
    const handleSubmit =(e:any)=>{
        
        dispatch(updateUser({...formData,phoneNumber:phone},user._id))
    }
    
        return (
            
            <div>
                <span className='font-bold text-[32px]'>Account</span >
                <div className='mt-8'>
                   
                   <Form
                    layout='vertical'
                    form={form}
                    onValuesChange={onFormLayoutChange}
                    >
                          <Form.Item label="Username"  rules={[{ required: true, message: 'Please input your password!' }]}>
                                    <Input   name="username" value={formData.username}  placeholder="input placeholder" onChange={handleChange}/>
                                    {
                                        Err.name==="username" &&<div className='text-red-400'>{Err.msg}</div>
                                    }
                                    
                        </Form.Item>
                        <div className="row">
                            <div className="col-md-6">
                            <Form.Item label="Firstname"  rules={[{ required: true, message: 'Please input your firstnmae!' }]}>
                                <Input name="firstname" placeholder="Enter fitstname" value={formData.firstname} onChange={handleChange}  />
                            </Form.Item>
                            </div>
                            <div className="col-md-6">
                                <Form.Item label="Lastname"   rules={[{ required: true, message: 'Please input your lastname!' }]}>
                                    <Input name="lastname"  value={formData.lastname} placeholder="input placeholder" onChange={handleChange} />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item label="Email"  rules={[{ required: true, message: 'Please input your password!' }]}>
                                    <Input name="email" value={formData.email}  placeholder="input placeholder" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item label="Password">
                                    <Input.Password name="password" value={formData.password} onChange={handleChange}  placeholder="input placeholder" />
                                    <div className='text-xs text-[#722252] font-bold mt-1 ml-1'>At least one digit</div>
                        {
                            Err.name==="password" &&<div className='text-red-400'>{Err.msg}</div>
                        }
                        </Form.Item>
                       
                        <Form.Item label="Date of Birth" >
                            <DatePicker name="dateOfBirth" value={moment(formData.dateOfBirth)} onChange={handleDateChange}/>
                        </Form.Item>
                        <Form.Item label="Phone Number"   rules={[{ required: true, message: 'Numbers Only' }]}>
                        <PhoneInput
                            placeholder="Enter phone number" value={formData.phoneNumber} onChange={setphone}/>
                        </Form.Item>
                        <Form.Item >
                            <Button className='save-button' disabled={Err.msg ? true :false} onClick={handleSubmit} >{loading ? "saving":"save"}</Button>
                        </Form.Item>
                    
                </Form>
                </div>
            </div>
            
            
        );
}