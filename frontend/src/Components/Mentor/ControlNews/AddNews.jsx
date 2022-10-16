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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <AddCircleIcon variant="primary" className="add_news" onClick={handleShow}/>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Announcment</Modal.Title>
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
                onChange={(e)=>{
                    setne_description(e.target.value)
                }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newAnnouncment}>
            Post Announcment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNews;