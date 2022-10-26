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
  const [password, setpassword] = useState("");
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
    formData.append("password", password);
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
  const selectcycle = (id) => {
    console.log(id);
    setSelectedcycle(id);
  };
  const ID = localStorage.getItem("id");
    const ROLE = localStorage.getItem("role");
  let profiledetails = props.profile.map(function (item) {
    return [
      item.picture,
      item.sysrole.sys_name,
      item.username,
      item.name,
      item.email,
      item.cycle.cy_name,
      item.cycle.branch.br_name,
      item.id,

      item.status_id,
      item.cycle_id,
      item.systemroles_id,
      item.password,
      item.systemroles_id,
    ];
  });
  console.log(profiledetails[0][12]);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          setId(profiledetails[0][7]);
          setpassword(profiledetails[0][11]);
          setSelectedcycle(profiledetails[0][10]);
          setEmail(profiledetails[0][4]);
          setName(profiledetails[0][3]);
          setUsername(profiledetails[0][2]);
          setSelectedstatus(profiledetails[0][9]);
          setPicture(profiledetails[0][0]);
          setSelectedSystemRoles(profiledetails[0][10]);
        }}
        className="form"
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            {" "}
            <font color="#f54b9d">E</font>
            <font color="#fbb107">D</font>
            <font color="#2e489e">I</font>
            <font color="#f54b9d">T </font>
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
            {" "}
            {profiledetails[0][7] == ID ? (
              <>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="your username"
                    autoFocus
                    className="header_form"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    className="header_form"
                    autoFocus
                  />
                </Form.Group>{" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
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
                    className="header_form"
                  />
                </Form.Group>
              </>
            ) : (
              ""
            )}{" "}
            {ROLE == 2 ? (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="your full name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="header_form"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput5"
                >
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    className="header_form"
                    onClick={(e) => selectfun(e.target.value)}
                  >
                    {props.sysroles.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.sys_name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>{" "}
                {SelectedSystemRoles == 1 ? (
                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>

                    <Form.Select
                      className="header_form"
                      onClick={(e) => selectStatus(e.target.value)}
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
                )}{" "}
                <Form.Group className="mb-3">
                  <Form.Label>Cycle</Form.Label>

                  <Form.Select
                    className="header_form"
                    onClick={(e) => selectcycle(e.target.value)}
                  >
                    {props.cycle.map((unit) => (
                      <option key={unit.id} value={unit.id}>
                        {unit.cy_name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </>
            ) : (
              ""
            )}
            <Form.Label>Upload image</Form.Label>
            <Form.Control
              className="header_form"
              type="file"
              placeholder="status"
              onChange={onChangeFile}
              autoFocus
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            className="close_button"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={EditProfiledetails}
            className="submit_button"
          >
            Accept Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
