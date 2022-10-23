import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function AddQuestion(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="form">
        Ask a Question
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">e</font>
            <font color="#2e489e">w </font>
            <font color="#f54b9d">Q</font>
            <font color="#fbb107">u</font>
            <font color="#2e489e">e</font>
            <font color="#f54b9d">s</font>
            <font color="#fbb107">t</font>
            <font color="#2e489e">i</font>
            <font color="#f54b9d">o</font>
            <font color="#fbb107">n</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                autoFocus
                disabled
                className="header_form"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select className="header_form">
                <option> Select Here</option>
                <option>FrontEnd</option>
                <option>BackEnd</option>
                <option>DataBase</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>your Question</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                className="header_form"
              />
              <Form.Text className="note">
                Try to be clear in your question to be easily answered
              </Form.Text>
            </Form.Group>
            <Form.Label>Upload image</Form.Label>
            <br></br>
            <Form.Control
              className="header_form"
              type="file"
              placeholder="status"
              
              autoFocus
            />
            <br></br>
            <Form.Text className="note">
              you can add image to make your question clear
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="close_button">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="submit_button">
            Post Question
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuestion;
