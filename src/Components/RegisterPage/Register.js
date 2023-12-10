import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./Register.css";

const Register = () => {
  function signUpHandler() {
    console.log("Register");
  }

  return (
    <div className="register-page">
      {/* Section 1: Redirect to login */}
      <div className="login-btn-container">
        <Typography variant="h4" id="register-page-login-header">
          Have an account?
        </Typography>
        <Typography variant="body1" id="register-page-login-desc">
          Login now and seamlessly explore our services!
        </Typography>
        <Button variant="contained" id="login-redirect-btn">
          Login
        </Button>
      </div>

      {/* Section 2: Register form container */}
      <div className="form-container">
        <Typography variant="h4" id="company-name">
          Accredian
        </Typography>
        <Typography variant="h5" id="register-desc">
          Register an Account...
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="username"
            className="text-fields"
            label="Username"
            margin="normal"
          />
          <TextField
            id="email"
            className="text-fields"
            label="Email"
            type="email"
            margin="normal"
          />
          <TextField
            id="password"
            className="text-fields"
            label="Password"
            type="password"
            margin="normal"
          />
          <TextField
            id="confirm-password"
            className="text-fields"
            label="Confirm Password"
            type="password"
            margin="normal"
          />
          <Button variant="contained" id="register-btn" onClick={signUpHandler}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
