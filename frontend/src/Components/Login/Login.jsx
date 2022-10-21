import React from 'react'
import "./Login.scss"

function Login() {
  return (
    <div className="containers" onclick="onclick">
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
     
        <input className="loginput" type="email" placeholder="email" />
        <input className="loginput" type="password" placeholder="password" />
    
      </div>
    </div>
  );
}

export default Login