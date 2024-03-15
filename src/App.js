import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import FileUploadUser from "./fileUpload";
import Approve from "./Approve.js";
import RegisterAdmin from "./RegisterAdmin.js";
import LoginAdmin from "./LoginAdmin.js";
// import Register from "./Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/loginadmin" element={<LoginAdmin/>} ></Route>
          <Route path="/register" element={<Register/>} />
          <Route path="/registeradmin" element={<RegisterAdmin/>} />
          <Route path="/upload" element={<FileUploadUser/>} ></Route>
          <Route path="/approve" element={<Approve/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
