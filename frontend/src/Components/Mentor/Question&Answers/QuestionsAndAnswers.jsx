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

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function QuestionsAndAnswers(props) {
  const navigate = useNavigate();
  const Profile = (id) => {
    // console.log(id)
    navigate("/controlprofile", { state: { id: id } });
  };
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
  //edit answer popup
  const [editanswershow, setEditanswerShow] = useState(false);
  const EditanswerhandleClose = () => setEditanswerShow(false);
  const EditanswerhandleShow = () => setEditanswerShow(true);
  const [a_image, seta_image] = useState("");
  //Delete answer
    const [deleteanswershow, setDeleteanswerShow] = useState(false);
    const DeleteanswerhandleClose = () => setDeleteanswerShow(false);
    const DeleteanswerhandleShow = () => setDeleteanswerShow(true);

  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [q_text, setq_text] = useState("");
  const [q_image, setq_image] = useState("");
  const [id, setID] = useState(null);
  const ID = localStorage.getItem("id");
  const ROLE = localStorage.getItem("role");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState("");
  const [a_text, seta_text] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  var now = new Date();
  var date = now.toLocaleDateString();
  const a_date = date;

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
  const onChangeFileAnswer = (e) => {
    seta_image(e.target.files[0]);
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
    console.log(id);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_Codi_URL}/api/checkquestion?question_check_id=${id}`
      );
      const { data: check } = response;
      console.log(check);
      setCheck(check);
      {
        check.status == "" ? showDelete() : showNoDelete();
      }
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
  //Add Answer
  const newAnswer = (id) => {
    const formData = new FormData();
    formData.append("a_text", a_text);
    formData.append("a_image", image);
    formData.append("a_date", a_date);
    formData.append("user_id", ID);
    formData.append("question_id", id);
    axios
      .post(`${process.env.REACT_APP_Codi_URL}/api/addanswer`, formData, {
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
  //End of Adding question

  //Edit Answer
  const EditAnswer = async () => {
    const formData = new FormData();
    formData.append("a_text", a_text);
    formData.append("question_id", selectedQuestion);

    if (typeof a_image === "array" || typeof a_image === "object") {
      formData.append("a_image", a_image);
    }

    formData.append("_method", "PUT");
    await axios
      .post(
        `${process.env.REACT_APP_Codi_URL}/api/editanswer/${id}`,
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
  const selectquestion = (id) => {
    setSelectedQuestion(id);
  };
   const DeleteAnswer = async () => {
     await fetch(`${process.env.REACT_APP_Codi_URL}/api/deleteanswer/${id}`, {
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
  //End of Editing Answer
  return (
    <>
      <List sx={{ width: "400", maxWidth: 500, bgcolor: "background.paper" }}>
        {props.value.map((unit, index) => {
          return (
            <ListItem alignItems="flex-start" className="items" key={index}>
              <ListItemAvatar onClick={() => Profile(unit.id)}>
                <Avatar
                  className="avatar"
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
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Answer this question"
                            value={a_text}
                            onChange={(e) => seta_text(e.target.value)}
                          />
                          <Form.Control type="file" onChange={onImageChange} />
                          <Button
                            style={{ float: "right" }}
                            onClick={(e) => {
                              newAnswer(unit.id);
                            }}
                          >
                            Submit
                          </Button>
                          {/* <Divider variant="inset" /> */}
                          {props.answer.map((item, idx) => {
                            return unit.id == item.question_id ? (
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar
                                  onClick={() => Profile(item.id)}
                                >
                                  <Avatar
                                    className="avatar_answer"
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
                                        {item.a_date}
                                        {item.user_id == ID || item.system_user.systemroles_id==1 ? (
                                          <Dropdown className="dropdown_list">
                                            <Dropdown.Toggle
                                              as={CustomToggle}
                                            ></Dropdown.Toggle>
                                            <Dropdown.Menu size="sm" title="">
                                              <Dropdown.Header
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                  EditanswerhandleShow();
                                                  setID(item.id);
                                                  seta_text(item.a_text);
                                                  seta_image(item.a_image);
                                                  setSelectedQuestion(
                                                    item.question_id
                                                  );
                                                }}
                                              >
                                                Edit
                                              </Dropdown.Header>
                                              <Dropdown.Divider />
                                              <Dropdown.Header
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>{
                                                  DeleteanswerhandleShow();
                                                setID(item.id)}
                                                }
                                              >
                                                Delete
                                              </Dropdown.Header>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        ) : (
                                          ""
                                        )}
                                        <br></br>

                                        {item.a_text}

                                        {item.a_image == null ? (
                                          ""
                                        ) : (
                                          <img
                                            src={`${process.env.REACT_APP_Codi_URL}/pictures/${item.a_image}`}
                                            style={{ width: "100%" }}
                                          />
                                        )}
                                      </Typography>
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

      <Modal show={editanswershow} onHide={EditanswerhandleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#2e489e">E</font>
            <font color="#f54b9d">D</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">T </font>
            <font color="#2e489e">A</font>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">S</font>
            <font color="#2e489e">W</font>
            <font color="#f54b9d">E</font>
            <font color="#fbb107">R</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question</Form.Label>
              <Form.Select
                className="header_form"
                required
                onClick={(e) => selectquestion(e.target.value)}
              >
                {props.question.map((item, idx) => {
                  return (
                    <option key={idx} value={item.id}>
                      {" "}
                      {item.q_text}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>your Answer</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                value={a_text}
                className="header_form"
                onChange={(e) => seta_text(e.target.value)}
              />
              <Form.Text className="note">
                Try to be clear in your answer to be easily answered
              </Form.Text>
            </Form.Group>
            <Form.Label>Upload image</Form.Label>
            <br></br>
            <Form.Control
              className="header_form"
              type="file"
              placeholder="status"
              autoFocus
              onChange={onChangeFileAnswer}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="header_form">
          <Button
            variant="secondary"
            className="close_button"
            onClick={EditanswerhandleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="submit_button"
            onClick={EditAnswer}
          >
            Edit Announcment
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={deleteanswershow}
        onHide={DeleteanswerhandleShow}
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
            onClick={DeleteanswerhandleClose}
            className="close_button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={DeleteAnswer}
            className="submit_button"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
