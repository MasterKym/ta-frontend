import "./styles.scss";
import Menu from "components/Settings/Menu"

function Sidebar() {
  return (
    <div className="Sidebar">
      <b className="b">Settings</b>
      <Menu/>
    </div>
  );
}

export default Sidebar;
