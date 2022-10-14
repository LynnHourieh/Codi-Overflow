import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function TooltipPositionedExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OverlayTrigger
        overlay={
          <Tooltip>
            <strong>Answer this question </strong>.
          </Tooltip>
        }
      >
        <QuestionAnswerIcon onClick={handleShow} />
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Answer Question</Modal.Title>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>your Answer</Form.Label>
              <Form.Control as="textarea" rows={3} required />
              <Form.Text className="text-muted">
                Try to be clear in your answer
              </Form.Text>
            </Form.Group>
            <Form.Label>Upload image</Form.Label>
            <br></br>
            <AddPhotoAlternateIcon />
            <br></br>
            <Form.Text className="text-muted">
              you can add image to make your answer clearer
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post Answer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TooltipPositionedExample;
