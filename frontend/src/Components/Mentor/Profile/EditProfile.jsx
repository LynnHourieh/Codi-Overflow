import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

function EditProfile(props) {
  const [show, setShow] = useState(false);
  const [SelectedSystemRoles, setSelectedSystemRoles] = useState(null);
  const [Selectedstatus, setSelectedstatus] = useState(null);
  const [Selectedcycle, setSelectedcycle] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditProfiledetails = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    if (typeof picture === "array" || typeof picture === "object") {
      formData.append("picture", picture);
    }
    formData.append("systemroles_id", SelectedSystemRoles);
    formData.append("status_id", Selectedstatus);
    formData.append("cycle_id", Selectedcycle);
    formData.append("_method", "PUT");
    await axios
      .post(
        `${process.env.REACT_APP_Codi_URL}/api/updatesysuser/${id}`,
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
  const onChangeFile = (e) => {
    setPicture(e.target.files[0]);
  };
  const selectfun = (id) => {
    console.log(id);
    setSelectedSystemRoles(id);
  };
  const selectStatus = (id) => {
    console.log(id);
    setSelectedstatus(id);
  };
  const selectcycle=(id)=>{
    console.log(id);
    setSelectedcycle(id)
  }


  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          setId(props.profiledetails[0][7]);
          setSelectedcycle(props.profiledetails[0][10]);
          setEmail(props.profiledetails[0][4]);
          setName(props.profiledetails[0][3]);
          setUsername(props.profiledetails[0][2]);
          setSelectedstatus(props.profiledetails[0][9]);
          setPicture(props.profiledetails[0][0]);
          setSelectedSystemRoles(props.profiledetails[0][11]);
        }}
        className="form"
      >
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
              <Form.Control
                type="text"
                placeholder="your username"
                autoFocus
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="your.example@email.com"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Select 
              
              onClick={(e) => selectfun(e.target.value)}>
                {props.sysroles.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.sys_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {props.classs == true && SelectedSystemRoles == 1 ? (
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>

                <Form.Select onClick={(e) => selectStatus(e.target.value)}>
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
            {props.classs == true &&
           
            SelectedSystemRoles == 1 ? (
              <Form.Group className="mb-3">
                <Form.Label>Cycle</Form.Label>

                <Form.Select onClick={(e) => selectcycle(e.target.value)}>
                  {props.cycle.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.cy_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Label>Upload image</Form.Label>
            <Form.Control
              type="file"
              placeholder="status"
              onChange={onChangeFile}
              autoFocus
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
          <Button variant="primary" onClick={EditProfiledetails}>
            Accept Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
