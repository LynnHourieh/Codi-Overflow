import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function NewsCards() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      className="news_options"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <MoreHorizIcon className="news_options" />
      {children}
    </a>
  ));
  //Edit popup
  const [editshow, setEditShow] = useState(false);
  const EdithandleClose = () => setEditShow(false);
  const EdithandleShow = () => setEditShow(true);
  //Delete popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [id, setId] = useState("");
   const[data,setData]=useState(null);
   const [errorMessage, setErrorMessage] = useState("");
    const [ne_title, setne_title] = useState("");
    const [ne_description, setne_description] = useState("");
     
 
  //Fetching News
  const FetchNews = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((reponse) => {
        if (reponse.ok) {
         
          return reponse.json();
        }
      })
      .then((data) => {
        setLoading(false);
        setNews(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
//Delete News
 const DeleteNews = async () => {

   await fetch( `${process.env.REACT_APP_Codi_URL}/api/deletenews/${id}`, {
    
     method: "DELETE",

     headers: {
       "Content-Type": "application/json",
     },
   })
     .then((response) => {
       window.location.reload();

       if (response.ok) {
         return response.json();
       }

       throw response;
     })

     .then((data) => {
       setData(data);
     });
 };
 //Edit News
  const EditNews = async () => {
    const formData = new FormData();
    formData.append("ne_title", ne_title);
    formData.append("ne_description", ne_description);
   
    formData.append("_method", "PUT");
    await axios
      .post(
        `${process.env.REACT_APP_Codi_URL}/api/updatenews/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((res) => {
        window.location.reload();
        setLoading(false);
      
        
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchNews();
  }, []);
  if (loading) return "loading";
  return (
    <div className="news_cards">
      {news.map((item) => {
        return (
          <Card
            style={{ width: "18rem", borderColor: "#2e489e" }}
            className="mb-2"
            key={item.id}
          >
            <Card.Header style={{ borderColor: "#2e489e" }}>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header
                    style={{ cursor: "pointer", color: "#f54b9d" }}
                    onClick={() => {
                      EdithandleShow();
                      setId(item.id);
                      setne_title(item.ne_title);
                      setne_description(item.ne_description);
                    }}
                  >
                    <EditIcon />
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Header
                    style={{ cursor: "pointer", color: "#f54b9d" }}
                    onClick={() => {
                      handleShow();
                      setId(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>

              <Card.Title className="news_title" style={{ color: "#2e489e" }}>
                {" "}
                {item.ne_title}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title className="news_date"> {item.ne_date} </Card.Title>
              <br></br>
              <Card.Text>{item.ne_description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  className="header_form">
          <Modal.Title>
            {" "}
            <font color="#f54b9d">A</font>
            <font color="#fbb107">L</font>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">R</font>
            <font color="#fbb107">T</font>
            <font color="#2e489e"> !</font>
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="note">
                Are you sure you want to delete this announcment?
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="close_button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={DeleteNews}
            className="submit_button"
          >
            Delete anyway
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={editshow} onHide={EdithandleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">D</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">T </font>
            <font color="#2e489e">A</font>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">N</font>
            <font color="#2e489e">O</font>
            <font color="#f54b9d">U</font>
            <font color="#fbb107">N</font>
            <font color="#2e489e">C</font>
            <font color="#f54b9d">M</font>
            <font color="#fbb107">E</font>
            <font color="#2e489e">N</font>
            <font color="#f54b9d">T</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                value={ne_title}
                autoFocus
                className="header_form"
                onChange={(e) => {
                  setne_title(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="header_form"
                as="textarea"
                rows={3}
                placeholder="What do you have?"
                required
                value={ne_description}
                onChange={(e) => {
                  setne_description(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            className="close_button"
            onClick={EdithandleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="submit_button"
            onClick={EditNews}
          >
            Edit Announcment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewsCards;
