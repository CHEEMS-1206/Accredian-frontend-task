import React from "react";
import { Typography, TextField, Button } from "@mui/material";

import "./Login.css";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const moveTo = useNavigate();

  function loginHandler() {
    console.log("login");
  }
  function moveToRegisterPage() {
    moveTo("/register");
    console.log("Move to register page.");
  }
  return (
    <div className="login-page">
      {/* Section 1: Login */}
      <div className="form-container">
        <Typography variant="h4" id="company-name">
          Accredian
        </Typography>
        <Typography variant="h5" id="login-desc">
          Login To Your Account...
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="username"
            className="text-fields"
            label="Username"
            margin="normal"
          />
          <TextField
            className="text-fields"
            id="password"
            label="Password"
            type="password"
            margin="normal"
          />
          <Button variant="contained" id="login-btn" onClick={loginHandler}>
            Login
          </Button>
        </form>
      </div>

      {/* Section 2: Sign Up */}
      <div className="reg-btn-container">
        <Typography variant="h4" id="login-page-reg-header">
          New here?
        </Typography>
        <Typography variant="body1" id="login-page-reg-desc">
          Sign up and befriend yourself with immense ocean of opportunities.
        </Typography>
        <Button
          onClick={moveToRegisterPage}
          variant="contained"
          id="reg-redirect-btn"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
