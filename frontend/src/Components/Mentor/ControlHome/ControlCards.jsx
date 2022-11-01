import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../../Images/pic1.webp";
import question from"../../Images/question.jpg"
import pic3 from "../../Images/pic3.jpg"

function ControlCards() {
  return (
    <div className="cards">
      <Card style={{ width: "18rem", borderColor: "#f54b9d" }}>
        <Card.Img variant="top" src={question} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>Questions</Card.Title>
          <Card.Text>
            Answering and asking questions is an important part of learning. We
            ask questions in order to learn more information about something,
            and we answer questions to provide more information.
          </Card.Text>
          <Button
            style={{ backgroundColor: "#f54b9d", borderColor: "#f54b9d" }}
            href="/controlquestions"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", borderColor: "#fbb107" }}>
        <Card.Img variant="top" src={pic1} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>News & Announcment</Card.Title>
          <Card.Text>
            You can use Announcements to welcome students to the course at the
            beginning of the term, let them know of any important deadlines or
            materials that have been added to the course.
          </Card.Text>
          <Button
            style={{ backgroundColor: "#fbb107", borderColor: "#fbb107" }}
            href="/controlnews"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", borderColor: "#2e489e" }}>
        <Card.Img variant="top" src={pic3} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>Resources</Card.Title>
          <Card.Text>
            Various interactive resources like examples, assignments, videos,
            applications, projects and more help the user to learn and
            understand the programming language more effectively
          </Card.Text>
          <Button
            style={{ backgroundColor: "#2e489e", borderColor: "#2e489e" }}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ControlCards
