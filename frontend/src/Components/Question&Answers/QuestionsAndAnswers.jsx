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
import pic from "../Images/pic.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dropdown from "react-bootstrap/Dropdown";

import TooltipPositioned from "./TooltipPositioned";

export default function QuestionsAndAnswers() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
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
      <ListItem alignItems="flex-start" className="items">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary="Harley Quinn"
          secondary={
            <React.Fragment>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                <Dropdown.Menu size="sm" title="">
                  <Dropdown.Header style={{cursor:"pointer"}}>Edit</Dropdown.Header >
                  <Dropdown.Divider />
                  <Dropdown.Header style={{cursor:"pointer"}}>Delete</Dropdown.Header >
                </Dropdown.Menu>
              </Dropdown>

              <div className="test">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  FrontEnd<br></br>
                </Typography>
                <TooltipPositioned/>
              </div>
              {
                " I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands this"
              }
              <img src={pic} style={{ width: "100%" }} />
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Answer</Accordion.Header>
                  <Accordion.Body>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" className="items">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <MoreHorizIcon />
        </ListItemAvatar>

        <ListItemText
          primary="Harley Quinn"
          secondary={
            <React.Fragment>
              <div className="test">
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  FrontEnd<br></br>
                </Typography>
                
              </div>
              {
                " I'll be in your neighborhood doing errands this…I'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands thisI'll be in your neighborhood doing errands this"
              }
              <img src={pic} style={{ width: "100%" }} />

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Answer</Accordion.Header>
                  <Accordion.Body>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
