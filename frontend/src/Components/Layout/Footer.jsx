import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function TextLinkExample() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="https://www.facebook.com/coditechlb/">
          <FacebookIcon sx={{ color: "#2e489e" }} />
        </Navbar.Brand>

        <Navbar.Brand href=" https://www.instagram.com/codi_tech/">
          <InstagramIcon sx={{ color: "#fbb107" }} />
        </Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/school/codi.tech/">
          <LinkedInIcon sx={{ color: "#2e489e" }} />
        </Navbar.Brand>
        <Navbar.Brand href="https://twitter.com/codi_tech">
          <TwitterIcon sx={{ color: "#2e489e" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in by: LynnHourieh</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
