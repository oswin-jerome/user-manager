import { Link } from "react-router-dom";
import { Button, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div className="p-4 bg-secondary text-white d-flex justify-content-between align-items-center">
      <h4>MyApp</h4>
      <Nav className="gap-4">
        <NavItem>
          <Link className="text-white" to={"/"}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link className="text-white" to={"/register"}>
            Register
          </Link>
        </NavItem>
        <NavItem>
          <Link className="text-white" to={"/login"}>
            Login
          </Link>
        </NavItem>
        <NavItem>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace("/login");
            }}
          >
            Logout
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
