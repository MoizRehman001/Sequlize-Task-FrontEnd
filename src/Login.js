import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFlag, setLoginFlag] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: null,
    password: null,
    role: 2,
  });

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login/user",
        userData
      );
      alert("Logged in Succesfully");
      localStorage.setItem('userName' , userData?.email)
      navigate('/upload')
      
      setLoginFlag(false);
    } catch (error) {
      alert("user Not Logged in : ", error);
      setLoginFlag(false);
    }
  };

  useEffect(() => {
    if (loginFlag) {
      loginUser();
    }
  }, [loginFlag]);

  return (
    <center style={{}}>
      <h1>Login User</h1>
      <input
        type="text"
        placeholder="User Name"
        style={{ width: "20%", padding: "0.3%", margin: "0.5%" }}
        onInput={event => {
            setUserData({...userData , email : event?.target?.value})
        }}
      ></input>
      <br></br>

      <input
        type="password"
        placeholder="Enter Password"
        onInput={event => {
            setUserData({...userData , password : event?.target?.value})
        }}
        style={{ width: "20%", padding: "0.3%", margin: "0.5%" }}
      ></input>
      <br></br>
      <button style={{ width: "20%", padding: "0.3%", margin: "0.5%" }} onClick={() => setLoginFlag(true) } >
        Login
      </button>
      <br></br>
      <Link to={"/loginadmin"}>Login Admin</Link>
      <br></br>
      <Link to={"/register"}>Register the user </Link>
      <br></br>
      <Link to={"/registeradmin"}>Register Admin</Link>
    </center>
  );
};

export default Login;
