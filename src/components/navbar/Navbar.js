import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./../../assets/comahueStore.png";
import logo2 from "./../../assets/Authorized.png";
import CartWidget from "../cartWidget/CartWidget";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img src={logo} className="logoNav" />
          </Link>
          <Nav className="me-auto mx-auto">
            <Link className="menu-link" to="/category/iphone">
              Iphone
            </Link>
            <Link className="menu-link" to="/category/mac">
              Mac
            </Link>
            <Link className="menu-link" to="/category/ipad">
              Ipad
            </Link>
            <Link className="menu-link" to="/category/watch">
              Watch
            </Link>

            <Link className="menu-link" to="/category/airpods">
              AirPods
            </Link>
          </Nav>

          <img src={logo2} className="logoNav2" />

          <Link>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
