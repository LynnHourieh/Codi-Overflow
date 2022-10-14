import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../Images/pic1.webp";

function CardsExample() {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="/questions">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>News & Announcment</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="/news">
            {" "}
            Go somewhere
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>Resources</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardsExample;
