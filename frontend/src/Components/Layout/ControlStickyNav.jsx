import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router";
import codi from "../Images/codi.png";
import LogoutIcon from "@mui/icons-material/Logout";
function ControlStickyNav() {

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <img src={codi} className="list_images" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/controlhome" className="navbar_color">
                Home
              </Nav.Link>
              <Nav.Link href="/yourprofile" className="navbar_color">
                Profile
              </Nav.Link>
              <Nav.Link href="/controlquestions" className="navbar_color">
                All Questions
              </Nav.Link>

              <Nav.Link href="/controlnews" className="navbar_color">
                News
              </Nav.Link>
              <Nav.Link href="/list" className="navbar_color">
                List
              </Nav.Link>
              <Nav.Link href="#action2" className="navbar_color">
                Resources
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link href="/login">
                <LogoutIcon style={{ color: "#f54b9d" }} />
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default ControlStickyNav;
