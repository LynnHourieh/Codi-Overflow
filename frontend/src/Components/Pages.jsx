import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Student/News/News";
import QuestionsAndAnswersHeader from "./Mentor/Question&Answers/QuestionsAndAnswersHeader"
import Profile from "./Student/Profile/Profile";
import Home from "./Home/Home";
import Footer from "./Layout/Footer";
import ControlNews from "./Mentor/ControlNews/ControlNews";
import ControlProfile from "./Mentor/Profile/ControlProfile";
import StudentList from "./Mentor/List/StudentList";
import ListHeader from "./Mentor/List/ListHeader";
import { alignPropType } from "react-bootstrap/esm/types";
import Login from "./Login/Login";

function Pages() {
  const [cycle, setCycle] = useState(null);
  const [status, setStatus] = useState(null);
  const [branch, setBranch] = useState(null);
  const [sysroles, setSysroles] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingCycle, setloadingCycle] = useState(true);
  const [loadingBranch, setloadingBranch] = useState(true);
  const [loadingSystemRole, setloadingSystemRole] = useState(true);
  const [loadingStatus, setloadingStatus] = useState(true);
  const [loadingCategory, setloadingCategory] = useState(true);
  const[question,setQuestion]=useState(null);
  const[loadingQuestion,setLoadingQuestion]=useState(true);
    const [user, setUser] = useState(null);
    const [loadinguser, setLoadinguser] = useState(true);
      const FetchUsers = () => {
        fetch(`${process.env.REACT_APP_Codi_URL}/api/getsysuser`, {
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
            setLoadinguser(false);
            setUser(data);
          })
          .catch((error) => {
            console.error(error.message);
            setError(error);
          });
      };
  const FetchQuestions = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/question`, {
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
        setLoadingQuestion(false);
        setQuestion(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  const FetchCycles = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/cycle`, {
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
        setloadingCycle(false);
        setCycle(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  const FetchStatus = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/status`, {
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
        setloadingStatus(false);
        setStatus(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

  const FetchBranches = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/branch`, {
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
        setloadingBranch(false);
        setBranch(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  const FetchSysRoles = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/sysrole`, {
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
        setloadingSystemRole(false);
        setSysroles(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  const FetchCategories = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/category`, {
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
        setloadingCategory(false);
        setCategory(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

  useEffect(() => {
    FetchCycles();
    FetchStatus();
    FetchBranches();
    FetchCategories();
    FetchSysRoles();
    FetchQuestions();
    FetchUsers();
  }, []);

  // console.log(cycle);
  // console.log(status);
  // console.log(sysroles)
  // console.log(branch);
  // console.log(category)
  if (
    loadingCycle ||
    loadingBranch ||
    loadingSystemRole ||
    loadingStatus ||
    loadingCategory ||
    loadingQuestion ||
    loadinguser
  )
    return "loading";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/controlquestions"
          element={<QuestionsAndAnswersHeader question={question} setQuestion={setQuestion}  category={category} user={user} setCategory={setCategory} setUser={setUser}/>}
        ></Route>
        {/* <Route
          path="/questions"
          element={<QuestionsAndAnswersHeader />}
        ></Route> */}
        <Route path="/news" element={<News />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/controlnews" element={<ControlNews />}></Route>
        <Route
          path="/controlprofile"
          element={
            <ControlProfile
              cycle={cycle}
              setCycle={setCycle}
              status={status}
              setStatus={setStatus}
              sysroles={sysroles}
              setSysroles={setSysroles}
              branch={branch}
              setBranch={setBranch}
              category={setCategory}
            />
          }
        ></Route>
        <Route
          path="/list"
          element={
            <ListHeader
              cycle={cycle}
              setCycle={setCycle}
              status={status}
              setStatus={setStatus}
              sysroles={sysroles}
              setSysroles={setSysroles}
              branch={branch}
              setBranch={setBranch}
              category={setCategory}
              FetchSysRoles={FetchSysRoles}
              FetchStatus={FetchStatus}
              FetchCycles={FetchCycles}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default Pages;
