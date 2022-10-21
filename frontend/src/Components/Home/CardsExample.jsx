import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../Images/pic1.webp";
import question from"../Images/question.jpg"
import pic3 from "../Images/pic3.jpg"

function CardsExample() {
  return (
    <div className="cards">
      <Card style={{ width: "18rem", borderColor: "#f54b9d" }}>
        <Card.Img variant="top" src={question} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>Questions</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            style={{ backgroundColor: "#f54b9d", borderColor: "#f54b9d" }}
            href="/questions"
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            style={{ backgroundColor: "#fbb107", borderColor: "#fbb107" }}
            href="/news"
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

export default CardsExample;
