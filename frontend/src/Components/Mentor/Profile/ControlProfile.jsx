import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [picture, setPicture] = useState(null);
  const [classs, setClasss] = useState(false);

  // const navigate = useNavigate();
  const location = useLocation();
  //  console.log(location.state.id);

  const FetchProfile = () => {
    fetch(
      `${process.env.REACT_APP_Codi_URL}/api/sysuser/${location.state.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((reponse) => {
        if (reponse.ok) {
          return reponse.json();
        }
      })
      .then((data) => {
        setLoading(false);
        setProfile(data);
        let example = data.map(function (unit) {
          return [unit.sysrole.sys_name];
        });
              
               {example[0][0] == "Student" ? setClasss(true) : setClasss(false);} 
              
       
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
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
      item.status.st_name,
      item.status_id,
      item.cycle_id,
      item.systemroles_id,
     
    ];
  });
  // console.log(profiledetails);
  return (
    <>
      <Button className="form " variant="primary" href="/list">
        Go back to List
      </Button>
      <div className="container emp-profile">
        <div className="eleven">
          <h1>Profile</h1>
        </div>
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={`${process.env.REACT_APP_Codi_URL}/pictures/${profiledetails[0][0]}`}
                  alt=""
                />
                {/* <div
                className="file btn btn-lg btn-primary"
                
              >
                Change Photo
                <input type="file" name="file" onClick={onChangeFile}/>
              </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profiledetails[0][3].toUpperCase()}</h5>
                {classs == true ? (
                  <h6>
                    {" "}
                    {profiledetails[0][1]}/{profiledetails[0][8]}
                  </h6>
                ) : (
                  <h6>{profiledetails[0][1]}</h6>
                )}

                <h6></h6>
                <p className="proile-rating">
                  Questions : <span>8</span>
                </p>
                <p className="proile-rating">
                  Answers : <span>8</span>
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
              <EditProfile
                profiledetails={profiledetails}
                profile={profile}
                classs={classs}
                setClasss={setClasss}
                brnach={props.branch}
                cycle={props.cycle}
                sysrole={props.sysrole}
                status={props.status}
                setStatus={props.setStatus}
                sysroles={props.sysroles}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
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
