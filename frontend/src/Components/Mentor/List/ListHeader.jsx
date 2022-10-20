import React, { useEffect, useState } from "react";
import FilterList from "./FilterList";
import StudentList from "./StudentList";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ListHeader(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");
  const [imageError, setImageError] = useState("");
  const [selectedCycle, setSelectedcycle] = useState([]);
  const [Selectedstatus, setSelectedstatus] = useState([]);
  const [selectedsystemroles, setSelectedSystemRoles] = useState([]);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newParticipent = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("cycle_id", selectedCycle);
    formData.append("status_id", Selectedstatus);
    formData.append("systemroles_id", selectedsystemroles);
     formData.append("picture", image);
    axios
      .post(`${process.env.REACT_APP_Codi_URL}/api/addsysuser`, formData, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("Successfuly Sent!");
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
      });
  };
 
    const onImageChange = (e) => {
      setImage(e.target.files[0]);
    };
    const selectrole = (id) => {
      console.log(id);
      setSelectedSystemRoles(id);
    };
    const selectstatus = (id) => {
      console.log(id);
      setSelectedstatus(id);
    };
    const selectcycle = (id) => {
      console.log(id);
      setSelectedcycle(id);
    };

  return (
    <>
      {" "}
      <div className="eleven">
        <h1>Participants</h1>
      </div>{" "}
      <ButtonGroup className="mb-2">
        <Button onClick={handleShow}>New Student</Button>

        <Button variant="danger">New Mentor</Button>
      </ButtonGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="your username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your full name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="your.example@email.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Select
               
                onClick={(e) => selectrole(e.target.value)}
              >
                {props.sysroles.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.sys_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>

              <Form.Select
               
                onClick={(e) => selectstatus(e.target.value)}
              >
                {props.status.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.st_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label required>Cycle</Form.Label>

              <Form.Select
              
                onClick={(e) => selectcycle(e.target.value)}
               
              >
                {props.cycle.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.cy_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Label>Upload image</Form.Label>
            <Form.Control
              type="file"
              placeholder="status"
              autoFocus
              onChange={onImageChange}
            />

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
          <Button variant="primary" onClick={newParticipent}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <FilterList />
    </>
  );
}

export default ListHeader;
