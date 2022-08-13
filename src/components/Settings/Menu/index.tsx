import "./styles.scss";
import { useState } from "react";

function Menu() {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  }
  return (
    <>
      <ul>
        <li>
          Account
        </li>
        <li>
          Notification
        </li>
        <li>
          Security
        </li>
        <li>
          Delete
        </li>
      </ul>
    </>
  );
}

export default Menu;
