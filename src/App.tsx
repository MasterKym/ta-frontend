import { Login, Settings } from "components";
import { Navigate, Route, Routes } from "react-router-dom";
import "styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from "react-redux";
import { useAppSelector } from "utils/hooks";
function App() {
  const user =useAppSelector((state:any)=>state.authReducer.authData)
  console.log(user)
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/"  element ={user? <Navigate to ='../settings' />: <Login/>} />
        <Route path="/settings" element={user? <Settings/>: <Navigate to="../"/>} />
        <Route path="*" element={"404"} />
      </Routes>
    </div>
  );
}

export default App;
