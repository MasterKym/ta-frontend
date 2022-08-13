import "./styles.scss";
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
import { useState } from "react";

import Menu from "components/Settings/Menu"

function TopBar() {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  }
  return (
    <div>
      <div className="Topbar">
        <div className="Row">
          <b className="b">Settings</b>
          <div onClick={toggleNav}>
            {show ? (<GrClose />) : (<FiMenu />)}
          </div>
        </div>
        <div className={`menu ${show ? "show":""}`}>
          <Menu/>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
