import { Body } from "components/Body/Body";
import {  useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Settings.scss'
import { MenuOutlined  } from '@ant-design/icons';
import { useWindowSize } from "utils/hooks";
import { useDispatch } from "react-redux";
import { logout } from "utils/Actions/AuthAction";
function Settings() {
  // react router navigate
  const navigate = useNavigate();

  const [tab, settab] = useState("Account")
  const [navOpened, setnavOpened] = useState(false)
  const [large, setlarge] = useState(true)
  const size: any = useWindowSize();
 
  const dispatch =useDispatch()
  const handleLogout=()=>{
    dispatch(logout())
    navigate('/')
   
  }
  // on component mount
  // useEffect(() => {
  //   // on success
  //   const success = () => {
  //     console.log("you are successfully logged in");
  //   };

  //   // on failure
  //   const failure = () => {
  //     // you're not logged in, go back to login
  //     navigate("/");
  //   };

  //   // get Profile
  //   getProfile(success, failure);
  // }, []);
  var larged
  useEffect(() => {
   if (window.innerWidth >400) {
    setlarge(true)
   }else{
    setlarge(false)
   }
  }, [size])
  
  return (
    // YOUR CODE SHOULD BE HERE!
    <div className="row w-full h-full p-10 lg:px-[250px] lg:py-[40px]">
      <div className="col-md-3">
        <div className='lg:pt-5 pb-4 lg:pb-0'>
              <div className="items-center flex gap-[9.5rem]">
                <span className='font-bold text-[26px]'>Settings</span>
                <MenuOutlined onClick={()=>setnavOpened((prev)=>!prev)}  className="float-right lg:d-none text-xl"/>
              </div>
          
                {
                    large ?
                    <div className="">
                        <div className='list-none'>
                            <li className={tab==="Account" ? 'active' :""} onClick={()=>settab("Account")}>Account</li>
                            <li className={tab==="Notifications" ? 'active' :""} onClick={()=>settab("Notifications")}>Notifications</li>
                            <li className={tab==="Security" ? 'active' :""} onClick={()=>settab("Security")}>Security</li>
                            <li className={tab==="DeleteAccount" ? 'active' :""} onClick={()=>settab("DeleteAccount")}>Delete Account</li>
                        </div>
                        <button  onClick={handleLogout} className="bg-[#7F265B] text-white rounded-md px-[3.75rem] py-1 ml-2 mt-2">Logout</button>
                    </div>:navOpened && <div className="">
                        <div className='list-none'>
                            <li className={tab==="Account" ? 'active' :""} onClick={()=>settab("Account")}>Account</li>
                            <li className={tab==="Notifications" ? 'active' :""} onClick={()=>settab("Notifications")}>Notifications</li>
                            <li className={tab==="Security" ? 'active' :""} onClick={()=>settab("Security")}>Security</li>
                            <li className={tab==="DeleteAccount" ? 'active' :""} onClick={()=>settab("DeleteAccount")}>Delete Account</li>
                        </div>
                        <button  onClick={handleLogout} className="bg-[#7F265B] text-white rounded-md px-[3.75rem] py-1 ml-2 mt-2">Logout</button>
                    </div>
              }
             
             
        </div>
      </div>
      <div className="col-md-9">
      <Body tab={tab} />
      </div>
      
      
    </div>
  );
}

export default Settings;
