
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  codi from  "../Images/codi.png"
import { Outlet } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
function StickyNav() {
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
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/questions">All Questions</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="#action2">Resources</Nav.Link>
              
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

export default StickyNav;