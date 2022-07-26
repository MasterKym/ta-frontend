import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getProfile from "utils/api/getProfile";

function Settings() {
  // react router navigate
  const navigate = useNavigate();

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

  return (
    // YOUR CODE SHOULD BE HERE!
    <div>Settings</div>
  );
}

export default Settings;
