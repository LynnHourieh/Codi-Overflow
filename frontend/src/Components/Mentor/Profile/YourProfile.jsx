import React, { useState, useEffect } from "react";
import StickyNav from "../../Layout/StickyNav";
import { useNavigate, useLocation } from "react-router-dom";
import EditProfile from "./EditProfile";
import Loading from "../../Layout/Loading";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [count, setCount] = useState(null);
  const [loadingcount, setLoadingCount] = useState(true);

  const FetchProfile = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    const Role = localStorage.getItem("role");
    const ID = localStorage.getItem("id");

    // console.log(ID)

    fetch(`${process.env.REACT_APP_Codi_URL}/api/sysuser/${ID}`, {
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
  const Count = () => {
    const ID = localStorage.getItem("id");
    fetch(`${process.env.REACT_APP_Codi_URL}/api/count/${ID}`, {
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
        setLoadingCount(false);
        setCount(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  useEffect(() => {
    FetchProfile();
    Count();
  }, []);
  if (loading || loadingcount) return <Loading/>;
  console.log(profile[0].levels);
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
                  src={`${process.env.REACT_APP_Codi_URL}/pictures/${profile[0].picture}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profile[0].name}</h5>

                <p className="proile-rating">
                  Questions : <span>{count.question}</span>
                </p>
                <p className="proile-rating">
                  Answers : <span>{count.answer}</span>
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
                profile={profile}
                cycle={props.cycle}
                sysroles={props.sysroles}
                status={props.status}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {profile[0].biography == "null" ||
              profile[0].biography == null ? (
                ""
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
                      <p>{profile[0].username}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile[0].name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile[0].email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Branch</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile[0].cycle.branch.br_name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Cylce</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile[0].cycle.cy_name}</p>
                    </div>
                  </div>

                  {profile[0].levels == "null" || profile[0].levels == null ? (
                    ""
                  ) : (
                    <div className="row">
                      <div className="col-md-6">
                        <label>Level</label>
                      </div>
                      <div className="col-md-6">
                        
                        <p>{profile[0].levels}</p>
                      </div>
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
