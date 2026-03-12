import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link to="">
              Logout
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
