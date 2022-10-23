import React,{useState} from 'react'
import Button from 'react-bootstrap/esm/Button';
import {useNavigate} from "react-router-dom"
import "./Login.scss"

function Login() {
  const [data, setData] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
    const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_Codi_URL}/api/role?username=${username}&password=${password}`,
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
        throw reponse;
      })
      .then((data) => {
        if (data.status.length === 0) {
          return alert("incorrect username and password");
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.status[0].name);
           localStorage.setItem("role", data.status[0].systemroles_id);
          localStorage.setItem("id", data.status[0].id);
          if((data.status[0].systemroles_id)==1 ?( navigate("/home")):(navigate("/list")))
         ;
        }
      });
  };
  return (
    <div className="containers" >
      <div className="logtop"></div>
      <div className="logbottom"></div>
      <div className="logcenter">
        <h1>
          <font color="#f54b9d">L</font>
          <font color="#fbb107">O</font>
          <font color="#2e489e">G</font>
          <font color="#f54b9d">I</font>
          <font color="#fbb107">N</font>
        </h1>

        <input
          className="loginput"
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          className="loginput"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <Button onClick={onSubmit}>LogIn</Button>
      </div>
    </div>
  );
}

export default Login