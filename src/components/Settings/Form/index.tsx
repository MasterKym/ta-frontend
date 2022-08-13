import "./styles.scss";
import "styles/button.scss"
import { Button, Input } from "components";
import TopBar from "components/Settings/TopBar"

function Sidebar() {
  return (
    <div>
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
            <Input type="text" label="First Name" />
            <Input type="text" label="Last Name" />
          </div>
          <Input type="email" label="Email" />
          <Input type="text" HTMLtype="password" label="Password" />
          <Input type="date" label="Date of birth" />
          <Input type="phone" minLength={100} label="Phone Number" />
        </div>
        <Button
          type="main"
          className="submit2"
          size="md">
          Save
        </Button>
      </div>
  );
}

export default Sidebar;
