import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function EditProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="form">
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="your username" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your full name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="your.example@email.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Branch</Form.Label>
              <Form.Control type="text" placeholder="Branch name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cycle </Form.Label>
              <Form.Control type="text" placeholder="Cycle" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select>
                <option> Select Here</option>
                <option>Ungrduate</option>
                <option>Alumni</option>
                <option>Mentor</option>
              </Form.Select>
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
           Accept Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
