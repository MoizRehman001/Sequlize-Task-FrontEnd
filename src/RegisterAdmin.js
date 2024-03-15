// import { Button, TextField } from "@mui/material";
import React from "react";

const RegisterAdmin = () => {
  return (
    <center style={{}}>
        <h1>Register Admin</h1>
        <input type="text" placeholder="First Name" style={{width : "20%" , padding : "0.3%" , margin : "0.5%"}} ></input><br></br>
        <input type="text" placeholder="Last Name" style={{width : "20%" , padding : "0.3%" , margin : "0.5%"}} ></input><br></br>

        <input type="password" placeholder="Enter Password" style={{width : "20%" , padding : "0.3%", margin : "0.5%"}} ></input><br></br>
        <button style={{width : "20%" , padding : "0.3%", margin : "0.5%"}}>Register</button>
      {/* <TextField id="standard-basic" label="User Name" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button variant="contained">Register the user</Button> */}
    </center>
  );
};

export default RegisterAdmin;
