import React, { useEffect, useState } from "react";
import FilterList from "./FilterList";
import StudentList from "./StudentList";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ControlStickyNav from "../../Layout/ControlStickyNav";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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

  // const handleShow = () => setShow(true);

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
      <div className="eleven">
        <h1>
          {" "}
          <font color="#f54b9d">P</font>
          <font color="#fbb107">A</font>
          <font color="#2e489e">R</font>
          <font color="#f54b9d">T</font>
          <font color="#fbb107">I</font>
          <font color="#2e489e">C</font>
          <font color="#f54b9d">I</font>
          <font color="#fbb107">P</font>
          <font color="#2e489e">A</font>
          <font color="#f54b9d">N</font>
          <font color="#fbb107">T</font>
          <font color="#2e489e">S</font>
        </h1>
      </div>{" "}
      <PersonAddIcon onClick={handleShow} className="add_participants" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#f54b9d">A</font>
            <font color="#fbb107">D</font>
            <font color="#2e489e">D </font>
            <font color="#f54b9d">P</font>
            <font color="#fbb107">A</font>
            <font color="#2e489e">R</font>
            <font color="#f54b9d">T</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">C</font>
            <font color="#f54b9d">I</font>
            <font color="#fbb107">P</font>
            <font color="#2e489e">A</font>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">T</font>
            <font color="#2e489e">S</font>
          </Modal.Title>
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
                className="header_form"
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
                className="header_form"
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
                className="header_form"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Select
                onClick={(e) => selectrole(e.target.value)}
                className="header_form"
              >
                {props.sysroles.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.sys_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {selectedsystemroles == 1 ? (
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>

                <Form.Select
                  onClick={(e) => selectstatus(e.target.value)}
                  className="header_form"
                >
                  {props.status.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.st_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group className="mb-3">
              <Form.Label required>Cycle</Form.Label>

              <Form.Select
                onClick={(e) => selectcycle(e.target.value)}
                className="header_form"
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
              className="header_form"
            />

            <br></br>
            <Form.Text className="note" >
              you can add image to make your question clear
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="close_button">
            Close
          </Button>
          <Button className="submit_button" onClick={newParticipent}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <FilterList />
    </>
  );
}

export default ListHeader;
