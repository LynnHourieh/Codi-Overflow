import Nav from "react-bootstrap/Nav";

function QuestionCategoryHeader() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="" style={{ color: "#f54b9d" }}>
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" style={{ color: "#2e489e" }}>
            Frontend
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" style={{ color: "#fbb107" }}>
            Backend
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" style={{ color: "#f54b9d" }}>
            Database
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
      export default QuestionCategoryHeader