import React from "react";
import Login from "./Components/LoginPage/Login.js";
import Register from "./Components/RegisterPage/Register.js";

import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  const isLoggedIn = localStorage.token ? true : false;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoggedIn && (
            <Route
              path="/"
              element={<div className="homepage">Welcome to Accredian !</div>}
            />
          )}
          {!isLoggedIn && (
            <Route path="/" element={<Login/>}/>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="*"
            element={<div className="errPage">#404 Not Found !</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
