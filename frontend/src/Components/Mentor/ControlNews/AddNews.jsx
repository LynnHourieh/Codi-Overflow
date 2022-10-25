import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function AddNews() {
  const [show, setShow] = useState(false);
  const[ne_title,setne_title]=useState('');
  const[ne_description,setne_description]=useState('');
    const [selectedUser, setselectedUser] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var NAME=localStorage.getItem("name")
  var ID = localStorage.getItem("id");
  var now = new Date();
  var date = now.toLocaleDateString();
  const ne_date = date;
  const[loadingannouncment,setLoadingannouncment]=useState(true);
  //Add new Announcment
  const newAnnouncment = () => {
    const formData = new FormData();
    formData.append("ne_title", ne_title);
    formData.append("ne_description", ne_description);
    formData.append("ne_date",ne_date)
    formData.append("user_id",ID)
    axios
      .post(`${process.env.REACT_APP_Codi_URL}/api/addnews`, formData, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {console.log("Successfuly Sent!");
      window.location.reload()})
       
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <AddCircleIcon
        variant="primary"
        className="add_news"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#fbb107">A</font>
            <font color="#2e489e">D</font>
            <font color="#f54b9d">D </font>
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                value={NAME}
                autoFocus
                disabled
                className="header_form"
                onChange={(e) => setselectedUser(ID)}
              />
            </Form.Group>
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
                as="textarea"
                rows={3}
                placeholder="What do you have?"
                value={ne_description}
                className="header_form"
                onChange={(e) => {
                  setne_description(e.target.value);
                }}
                required
              />
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
            onClick={newAnnouncment}
            className="submit_button"
          >
            Post Announcment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNews;