import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  };

  return (
    <form className="formPanel" onSubmit={login}>
      <h2
        style={{ marginBottom: "16px", fontWeight: "bold", color: "#3f51b5" }}
      >
        Login
      </h2>
      {errors.loginMessage && (
        <h3
          style={{
            marginTop: "16px",
            marginBottom: "16px",
            padding: "16px",
            borderRadius: "4px",
            backgroundColor: "#f44336",
            color: "#ffffff",
          }}
          role="alert"
        >
          {errors.loginMessage}
        </h3>
      )}
      <div style={{ width: "100%", marginBottom: "8px" }}>
        <TextField
          label="Username"
          variant="outlined"
          required
          fullWidth
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div style={{ width: "100%", marginBottom: "16px" }}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div style={{ width: "100%", marginTop: "16px" }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ backgroundColor: "#3f51b5", color: "#ffffff" }}
        >
          Log In
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
