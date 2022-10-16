import Nav from "react-bootstrap/Nav";

function QuestionCategoryHeader() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Frontend</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Backend</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Database</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
      export default QuestionCategoryHeader