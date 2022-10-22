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
      <Button  onClick={handleShow} className="form">
        Ask a Question
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Question</Modal.Title>
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
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select>
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
              <Form.Control as="textarea" rows={3} required />
              <Form.Text className="text-muted">
                Try to be clear in your question to be easily answered
              </Form.Text>
            </Form.Group>
            <Form.Label>Upload image</Form.Label>
            <br></br>
            <AddPhotoAlternateIcon />
            <br></br>
            <Form.Text className="text-muted">
              you can add image to make your question clear
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post Question
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuestion;
