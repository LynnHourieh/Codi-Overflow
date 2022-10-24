import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import pic from "../../Images/pic.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import TooltipPositioned from "./TooltipPositioned";
import Modal from "react-bootstrap/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";

export default function QuestionsAndAnswers(props) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <MoreHorizIcon />
      {children}
    </a>
  ));
  //Edit popup
  const [editshow, setEditShow] = useState(false);
  const EdithandleClose = () => setEditShow(false);
  const EdithandleShow = () => setEditShow(true);
  //Delete popup
  const [deleteshow, setDeleteShow] = useState(false);
  const DeletehandleClose = () => setDeleteShow(false);
  const DeletehandleShow = () => setDeleteShow(true);
  const [data, setData] = useState("");
  //
  //Delete popup
  const [nodeleteshow, setNoDeleteShow] = useState(false);
  const NoDeletehandleClose = () => setNoDeleteShow(false);
  const NoDeletehandleShow = () => setNoDeleteShow(true);
  //
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [q_text, setq_text] = useState("");
  const [q_image, setq_image] = useState("");
  const [id, setID] = useState(null);
  const ID = localStorage.getItem("id");
    const ROLE = localStorage.getItem("role");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState("");

  const EditQuestion = async () => {
    const formData = new FormData();
    formData.append("q_text", q_text);
    formData.append("category_id", SelectedCategory);

    if (typeof q_image === "array" || typeof q_image === "object") {
      formData.append("q_image", q_image);
    }

    formData.append("_method", "PUT");
    await axios
      .post(
        `${process.env.REACT_APP_Codi_URL}/api/editquestion/${id}`,
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
    setq_image(e.target.files[0]);
  };
  const selectcategory = (id) => {
    setSelectedCategory(id);
  };
  //Delete Question
  const DeleteQuestion = async () => {
    await fetch(`${process.env.REACT_APP_Codi_URL}/api/deletequestion/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        window.location.reload();

        if (response.ok) {
          return response.json();
        }

        throw response;
      })

      .then((data) => {
        setData(data);
      });
  };
  //Check if question have answer or not
  const checkQuestion = async (id) => {
    console.log(id)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Codi_URL}/api/checkquestion?question_check_id=${id}`
      );
      const { data: check } = response;
      console.log(check);
      setCheck(check);
      {check.status == "" ? showDelete() : showNoDelete();}
    
    } catch (error) {
      console.log(error.message);
    }
  };
  const showDelete = () => {
    setDeleteShow(true);
  };
  //
  //show popup for not allowing to delete a kpi.
  const showNoDelete = () => {
    setNoDeleteShow(true);
  };
  //
  return (
    <>
      <List sx={{ width: "400", maxWidth: 500, bgcolor: "background.paper" }}>
        {props.value.map((unit, index) => {
          return (
            <ListItem alignItems="flex-start" className="items" key={index}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={`${process.env.REACT_APP_Codi_URL}/pictures/${unit.system_user.picture}`}
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <React.Fragment>
                    {unit.system_user.name} {unit.system_user.sysrole.sys_name}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    {unit.q_date}

                  
                    {unit.system_user_id == ID ||
                    unit.system_user.sysrole.sys_name == "Student" ? (
                      <Dropdown className="dropdown_list">
                        <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                        <Dropdown.Menu size="sm">
                          {unit.system_user_id == ID ? (
                            <>
                              {" "}
                              <Dropdown.Header
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  EdithandleShow();
                                  setID(unit.id);
                                  setq_text(unit.q_text);
                                  setq_image(unit.q_image);
                                  setSelectedCategory(unit.category_id);
                                }}
                              >
                                Edit
                              </Dropdown.Header>
                              <Dropdown.Divider />
                            </>
                          ) : (
                            ""
                          )}

                          <Dropdown.Header
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              checkQuestion(unit.id);
                            }}
                          >
                            Delete
                          </Dropdown.Header>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      ""
                    )}

                    <span className="test">
                      <Typography
                        sx={{ display: "inline" }}
                        variant="body2"
                        color="text.primary"
                        component={"div"}
                      >
                        <br></br>
                        {unit.category.cat_name}
                        <br></br>
                      </Typography>
                      {/* <TooltipPositioned /> */}
                    </span>
                    {unit.q_text}
                    {unit.q_image == null ? (
                      ""
                    ) : (
                      <img
                        src={`${process.env.REACT_APP_Codi_URL}/pictures/${unit.q_image}`}
                        style={{ width: "100%" }}
                      />
                    )}
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Answer</Accordion.Header>
                        <Accordion.Body>
                          <div style={{ display: "flex" }}>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Answer this question"
                            />
                            <AddPhotoAlternateIcon />
                          </div>
                          {/* <Divider variant="inset" /> */}
                          {props.answer.map((item, idx) => {
                            return unit.id == item.question_id ? (
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar
                                    alt="Travis Howard"
                                    src={`${process.env.REACT_APP_Codi_URL}/pictures/${item.system_user.picture}`}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={item.system_user.name}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        sx={{ display: "inline" }}
                                        variant="body2"
                                        color="text.primary"
                                        component={"div"}
                                      >
                                        {item.a_text}
                                        {item.user_id == ID ? (
                                          <Dropdown className="dropdown_list">
                                            <Dropdown.Toggle
                                              as={CustomToggle}
                                            ></Dropdown.Toggle>
                                            <Dropdown.Menu size="sm" title="">
                                              <Dropdown.Header
                                                style={{ cursor: "pointer" }}
                                              >
                                                Edit
                                              </Dropdown.Header>
                                              <Dropdown.Divider />
                                              <Dropdown.Header
                                                style={{ cursor: "pointer" }}
                                              >
                                                Delete
                                              </Dropdown.Header>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        ) : (
                                          ""
                                        )}

                                        {item.a_image == "" ? (
                                          ""
                                        ) : (
                                          <img
                                            src={`${process.env.REACT_APP_Codi_URL}/pictures/${item.a_image}`}
                                            style={{ width: "100%" }}
                                          />
                                        )}
                                      </Typography>

                                      {item.a_date}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            ) : (
                              ""
                            );
                          })}{" "}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
      <Modal show={editshow} onHide={EdithandleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">D</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">T </font>
            <font color="#2e489e">Q</font>
            <font color="#f54b9d">U</font>
            <font color="#fbb107">E</font>
            <font color="#2e489e">S</font>
            <font color="#f54b9d">T</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">O</font>
            <font color="#f54b9d">N</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select
                className="header_form"
                required
                onClick={(e) => selectcategory(e.target.value)}
              >
                {props.category.map((item, idx) => {
                  return (
                    <option key={idx} value={item.id}>
                      {" "}
                      {item.cat_name}
                    </option>
                  );
                })}
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
                value={q_text}
                className="header_form"
                onChange={(e) => setq_text(e.target.value)}
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
              onChange={onChangeFile}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            className="close_button"
            onClick={EdithandleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="submit_button"
            onClick={EditQuestion}
          >
            Edit Announcment
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={nodeleteshow}
        onHide={NoDeletehandleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="header_form">
          <Modal.Title>
            {" "}
            <font color="#f54b9d">A</font>
            <font color="#fbb107">L</font>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">R</font>
            <font color="#fbb107">T</font>
            <font color="#2e489e"> !</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="note">
          This question has an answer, you can't delete it.
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="primary"
            onClick={NoDeletehandleClose}
            className="submit_button"
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={deleteshow}
        onHide={DeletehandleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="header_form">
          <Modal.Title>
            {" "}
            <font color="#f54b9d">A</font>
            <font color="#fbb107">L</font>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">R</font>
            <font color="#fbb107">T</font>
            <font color="#2e489e"> !</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="note">
          Are you sure you want to delete this question?
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            onClick={DeletehandleClose}
            className="close_button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={DeleteQuestion}
            className="submit_button"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
