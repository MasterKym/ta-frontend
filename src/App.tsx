import { Login, Settings } from "components";
import { Route, Routes } from "react-router-dom";
import "styles/globals.scss";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={"404"} />
      </Routes>
    </div>
  );
}

export default App;
