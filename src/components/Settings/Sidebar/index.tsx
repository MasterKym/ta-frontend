import "./styles.scss";
import Menu from "components/Settings/Menu"

function Sidebar() {
  return (
      <div className="Sidebar">
        <b className="b12">Settings</b>
        <Menu/>
      </div>
  );
}

export default Sidebar;
