import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";

function AddQuestion(props) {
  const [show, setShow] = useState(false);
  const [q_text, setText] = useState(null);
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const[selectedUser,setselectedUser]=useState("")
  const NAME = localStorage.getItem("name");
 const ID = localStorage.getItem("id");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var now = new Date();
  var date = now.toLocaleDateString();
  const q_date = date;

  const newQuestion = () => {
    const formData = new FormData();
    formData.append("q_text", q_text);
    formData.append("q_image", image);
    formData.append("q_date", q_date);
    formData.append("category_id", selectedCategory);
    formData.append("system_user_id", ID);
    axios
      .post(`${process.env.REACT_APP_Codi_URL}/api/addquestion`, formData, {
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
   const selectcategory = (id) => {
     console.log(id);
     setSelectedCategory(id);
   };
  return (
    <>
      <Button
        onClick={() => {
          handleShow();
        }}
        className="form"
      >
        Ask a Question
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header_form">
          <Modal.Title>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">e</font>
            <font color="#2e489e">w </font>
            <font color="#f54b9d">Q</font>
            <font color="#fbb107">u</font>
            <font color="#2e489e">e</font>
            <font color="#f54b9d">s</font>
            <font color="#fbb107">t</font>
            <font color="#2e489e">i</font>
            <font color="#f54b9d">o</font>
            <font color="#fbb107">n</font>
          </Modal.Title>
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
                className="header_form"
                value={NAME}
                onChange={(e)=>setselectedUser(ID)}


              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                onClick={(e) => selectcategory(e.target.value)}
                className="header_form"
                required
              >
                <option>Choose</option>
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
                onChange={(e) => setText(e.target.value)}
                className="header_form"
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
              onChange={onImageChange}
            />
            <br></br>
            <Form.Text className="note">
              you can add image to make your question clear
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="close_button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={newQuestion}
            className="submit_button"
          >
            Post Question
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddQuestion;
