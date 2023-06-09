import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./Student/News/News";
import QuestionsAndAnswersHeader from "./Mentor/Question&Answers/QuestionsAndAnswersHeader";
import Profile from "./Student/Profile/Profile";
import Home from "./Home/Home";
import ControlHome from "./Mentor/ControlHome/ControlHome"
import ControlNews from "./Mentor/ControlNews/ControlNews";
import ControlProfile from "./Mentor/Profile/ControlProfile";
import StudentList from "./Mentor/List/StudentList";
import ListHeader from "./Mentor/List/ListHeader";
import QuestionsAndAnswersHeaderStudent from "./Student/Question&AnswersStudents/QuestionsAndAnswersHeaderStudent";
import Login from "./Login/Login";
import StickyNav from "./Layout/StickyNav";
import ControlStickyNav from "./Layout/ControlStickyNav";
import YourProfile from "./Mentor/Profile/YourProfile";
import OthersProfile from "./Student/Profile/OthersProfile"
import Loading from "./Layout/Loading";


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
  const [question, setQuestion] = useState(null);
  const [loadingQuestion, setLoadingQuestion] = useState(true);
  const [user, setUser] = useState(null);
  const [loadinguser, setLoadinguser] = useState(true);
  const [item, setItem] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [loadingAnswer, setLoadingAnswer] = useState(true);
  const [latestquestion, setLatestquestion] = useState("");
  const [loadinglatestquestion, setloadinglatestquestion] = useState(true);
  const [latestnews, setLatestnews] = useState("");
  const [loadinglatestnews, setloadinglatestnews] = useState(true);
  const[count,setCount]=useState("");
  const[loadingcount,setLoadingCount]=useState(true)
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

  const FetchAnswer = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/answer`, {
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
        setLoadingAnswer(false);
        setAnswer(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };

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
        setItem(data);
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
  const FetchLatestQuestion = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/latestquestion`, {
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
        setloadinglatestquestion(false);
        setLatestquestion(data);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error);
      });
  };
  const FetchLatestNews = () => {
    fetch(`${process.env.REACT_APP_Codi_URL}/api/latestquestion`, {
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
        setloadinglatestnews(false);
        setLatestnews(data);
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
    FetchAnswer();
    FetchLatestQuestion();
    FetchLatestNews();
    Count()
  }, []);

 
  if (
    loadingCycle ||
    loadingBranch ||
    loadingSystemRole ||
    loadingStatus ||
    loadingCategory ||
    loadingQuestion ||
    loadinguser ||
    loadingAnswer ||
    loadinglatestnews ||
    loadinglatestquestion||
    loadingcount
  )
    return <Loading/>;

  return (
    <Router>
      <Routes>
        <Route path="/controlhome" element={<ControlStickyNav />}>
          <Route
            index
            element={
              <ControlHome
                latestquestion={latestquestion}
                answer={answer}
                category={category}
                question={question}
              />
            }
          ></Route>
        </Route>
        <Route path="/home" element={<StickyNav />}>
          <Route
            index
            element={
              <Home
                latestquestion={latestquestion}
                answer={answer}
                category={category}
                question={question}
              />
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/controlquestions" element={<ControlStickyNav />}>
          <Route
            index
            element={
              <QuestionsAndAnswersHeader
                question={question}
                setQuestion={setQuestion}
                category={category}
                user={user}
                setCategory={setCategory}
                setUser={setUser}
                answer={answer}
                setAnswer={setAnswer}
              />
            }
          ></Route>
        </Route>
        <Route path="/news" element={<StickyNav />}>
          <Route index element={<News />}></Route>
        </Route>
        <Route path="/profile" element={<StickyNav />}>
          <Route
            index
            element={
              <Profile
                count={count}
                sysroles={sysroles}
                cycle={cycle}
                status={status}
              />
            }
          ></Route>
        </Route>

        <Route path="/questions" element={<StickyNav />}>
          <Route
            index
            element={
              <QuestionsAndAnswersHeaderStudent
                question={question}
                setQuestion={setQuestion}
                category={category}
                user={user}
                setCategory={setCategory}
                setUser={setUser}
                answer={answer}
                setAnswer={setAnswer}
              />
            }
          ></Route>
        </Route>

        <Route path="/yourprofile" element={<ControlStickyNav />}>
          <Route
            index
            element={
              <YourProfile
                sysroles={sysroles}
                cycle={cycle}
                status={status}
                count={count}
              />
            }
          ></Route>
        </Route>

        <Route path="/controlnews" element={<ControlStickyNav />}>
          <Route index element={<ControlNews />}></Route>
        </Route>

        <Route path="/controlprofile" element={<ControlStickyNav />}>
          <Route
            index
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
                count={count}
              />
            }
          ></Route>
        </Route>

        <Route path="/othersprofile" element={<StickyNav />}>
          <Route
            index
            element={
              <OthersProfile
                cycle={cycle}
                setCycle={setCycle}
                status={status}
                setStatus={setStatus}
                sysroles={sysroles}
                setSysroles={setSysroles}
                branch={branch}
                setBranch={setBranch}
                category={setCategory}
                count={count}
              />
            }
          ></Route>
        </Route>

        <Route path="/list" element={<ControlStickyNav />}>
          <Route
            index
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
        </Route>
      </Routes>
    </Router>
  );
}

export default Pages;
