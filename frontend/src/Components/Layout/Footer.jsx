import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <InstagramIcon />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <FacebookIcon />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <YouTubeIcon />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          
          <LinkedInIcon />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer
