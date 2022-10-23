import * as React from "react";
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

import TooltipPositioned from "./TooltipPositioned";

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


  return (
    <List
      sx={{ width: "400", maxWidth: 750, bgcolor: "background.paper" }}
      className="questionlist"
    >
      {props.value.map((unit)=>{
        return (
          <ListItem alignItems="flex-start" className="items" key={unit.id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={`${process.env.REACT_APP_Codi_URL}/pictures/${unit.system_user.picture}`} />
            </ListItemAvatar>

            <ListItemText
              primary={unit.system_user.name}
              secondary={
                <React.Fragment>
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                    <Dropdown.Menu size="sm" title="">
                      <Dropdown.Header style={{ cursor: "pointer" }}>
                        Edit
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Header style={{ cursor: "pointer" }}>
                        Delete
                      </Dropdown.Header>
                    </Dropdown.Menu>
                  </Dropdown>

                  <p className="test">
                    <Typography
                      sx={{ display: "inline" }}
                     
                      variant="body2"
                      color="text.primary"
                    >
                      {unit.category.cat_name}
                      <br></br>
                    </Typography>
                    <TooltipPositioned />
                  </p>
                  {unit.q_text}
                  <img
                    src={`${process.env.REACT_APP_Codi_URL}/pictures/${unit.q_image}`}
                    style={{ width: "100%" }}
                  />
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Answer</Accordion.Header>
                      {props.answer.map((item)=>{
                        
                        return unit.id==item.question_id?(
                          <Accordion.Body key={unit.key}>
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
                                    >
                                      {item.a_text}
                                      <img
                                        src={`${process.env.REACT_APP_Codi_URL}/pictures/${item.a_image}`}
                                        style={{ width: "100%" }}
                                      />
                                    </Typography>
                                    {item.a_date}
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                            <Divider variant="inset" />
                          </Accordion.Body>
                        ):("");
                      })}
                      
                    </Accordion.Item>
                  </Accordion>
                </React.Fragment>
              }
            />
          </ListItem>
        );
          
      })}
    
    </List>
  );
}
