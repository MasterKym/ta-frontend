import "./styles.scss";
import "styles/button.scss"
import { Button, Input } from "components";
import TopBar from "components/Settings/TopBar"
import updateProfile from "utils/api/updateProfile"
import { validName, validPassword, validEmail, validPhone } from "utils/client/inputValidation"

import { useState, useEffect } from "react";

function Form() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phone: ""
  })

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "Please Verify Password",
    phone: "",
  })

  const [info, setInfo] = useState("")

  useEffect(() => {

    try {
      fetch("http://localhost:4000/profile", {
          method: "GET",
          credentials: "include"
        }).then(res => res.json()).then(res => {setData(res)});
    } catch {
      console.log("CRITICAL: error fetching the api");
    }
  }, [])

  useEffect(() => {

      console.log(data)

  }, [data])

  const firstNameHandler = (newValue: string|boolean) => {
    if (validName(newValue as string)){
      setError({...error, firstName: ""})
      setData({...data, firstName: newValue as string});
    } else {
      setError({...error, firstName: "Invalid First Name"})
      setData({...data, firstName: newValue as string});
    }
  }

  const lastNameHandler = (newValue: string|boolean) => {
    if (validName(newValue as string)){
      setError({...error, lastName: ""})
      setData({...data, lastName: newValue as string});
    } else {
      setError({...error, lastName: "Invalid Last Name"})
      setData({...data, lastName: newValue as string});
    }
  }

  const emailHandler = (newValue: string|boolean) => {
    if (validEmail(newValue as string)){
      setError({...error, email: ""})
      setData({...data, email: newValue as string});
    } else {
      setError({...error, email: "Invalid Email Format"})
      setData({...data, email: newValue as string});
    }
  }
  const passwordHandler = (newValue: string|boolean) => {
    if (validPassword(newValue as string)){
      setError({...error, password: ""})
      setData({...data, password: newValue as string});
    } else {
      setError({...error, password: "Password doesnt match criteria"})
      setData({...data, password: newValue as string});
    }
  }

  const phoneHandler = (newValue: string|boolean) => {
    if (validPhone(newValue as string)){
      setError({...error, phone: ""})
      setData({...data, phone: newValue as string});
    } else {
      setError({...error, phone: "Invalid Phone Number"})
      setData({...data, phone: newValue as string});
    }
  }

  const dateHandler = (newValue: string|boolean) => {
      setData({...data, dateOfBirth: newValue as string});
  }

  const submitValues = () => {
    const isError = Object.values(error).every(x => x === '');
    const x:any = document.getElementById("snackbar");

    if (isError){
      console.log("uwu")
      updateProfile(data).then( foo => {
        x.className = "show";
        setInfo(foo as string);
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }).catch( err => {
        x.className = "show";
        setInfo(err as string);
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      } )
    }
  }

  return (
    <>
    <div id="snackbar">{info}</div>
    <div className="Form">
      <TopBar/>
        <div className="FormHeader">
          <b className="b">Account</b>
          <Button
            type="main"
            className=""
            size="md">
            Save
          </Button>
        </div>
        <div>
          <div className="InputGroup">
            <Input type="text" required={true} error={error.firstName} onChange={firstNameHandler} value={data.firstName} placeholder="John" label="First Name" />
            <Input type="text" required={true} error={error.lastName} onChange={lastNameHandler} value={data.lastName} placeholder="Travolta" label="Last Name" />
          </div>
          <Input type="email" required={true} error={error.email} onChange={emailHandler} value={data.email} placeholder="ieatcookies@gmail.com" label="Email" />
          <Input type="text" required={true} error={error.password} onChange={passwordHandler} HTMLtype="password" placeholder="............" label="Password" />
          <Input type="date" required={true} onChange={dateHandler} value={data.dateOfBirth.split('T')[0]} HTMLtype="datetime-local" placeholder="08/04/2000" label="Date of birth" />
          <Input type="phone" required={true} error={error.phone} value={data.phone} onChange={phoneHandler} subLabel="" placeholder="+212678767645" minLength={100} label="Phone Number" />
        </div>
        <Button
          type="main"
          className="submit2"
          HTMLtype="submit"
          size="md"
          onClick={submitValues}
          >
          Save
        </Button>
      </div>
    </>
  );
}

export default Form;
