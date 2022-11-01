import React, { useState, useEffect } from "react";
import EditProfile from "../../Mentor/Profile/EditProfile";
import "../../Mentor/Profile/Profile.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import ControlStickyNav from "../../Layout/ControlStickyNav";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [picture, setPicture] = useState(null);

  const [data, setData] = useState(null);

  // const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.id);

  const FetchProfile = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/sysuser/${location.state.a}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((reponse) => {
        if (reponse.ok) {
          return reponse.json();
        }
      })
      .then((data) => {
        setLoading(false);
        setProfile(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

  const ID = localStorage.getItem("id");

  useEffect(() => {
    FetchProfile();
  }, []);
  if (loading) return "loading";

  let profiledetails = profile.map(function (item) {
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
      item.biography,
    ];
  });

  return (
    <>
      <div className="container emp-profile">
        <div className="eleven">
          <h1>
            <font color="#f54b9d">P</font>
            <font color="#fbb107">R</font>
            <font color="#2e489e">O</font>
            <font color="#f54b9d">F</font>
            <font color="#fbb107">I</font>
            <font color="#2e489e">L</font>
            <font color="#f54b9d">E</font>
          </h1>
        </div>
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={`${process.env.REACT_APP_Codi_URL}/pictures/${profiledetails[0][0]}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profiledetails[0][3].toUpperCase()}</h5>
                {profiledetails[0][1] == 1 ? (
                  <h6>
                    {" "}
                    {profiledetails[0][1]}/{}
                  </h6>
                ) : (
                  <h6>{profiledetails[0][1]}</h6>
                )}

                <h6></h6>
                <p className="proile-rating">
                  Questions : <span>{props.count.question}</span>
                </p>
                <p className="proile-rating">
                  Answers : <span>{props.count.answer}</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              {profile[0].id == ID ?
                (
                <EditProfile
                  profile={profile}
                  cycle={props.cycle}
                  status={props.status}
                  sysroles={props.sysroles}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {profiledetails[0][11] == "null" ||
              profiledetails[0][11] == null ? (
                " "
              ) : (
                <>
                  <label className="bio">Biography:</label>
                  <br></br>
                  <div className="bio_info">"{profile[0].biography}"</div>
                </>
              )}{" "}
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Username</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profiledetails[0][2]}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profiledetails[0][3]}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profiledetails[0][4]}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Branch</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profiledetails[0][6]}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Cylce</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profiledetails[0][5]}</p>
                    </div>
                  </div>
                  {profile[0].levels == null || profile[0].levels == "null" ? (
                    ""
                  ) : (
                    <div className="row">
                      <div className="col-md-6">
                        <label>Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>{profile[0].levels}</p>
                      </div>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Profile;
