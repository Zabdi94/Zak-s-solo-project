import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  Paper,
  Typography,
} from "@mui/material";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Paper className="formPanel" elevation={3}>
      <Typography variant="h5">Register User</Typography>
      {errors.registrationMessage && (
        <Typography variant="subtitle1" color="error">
          {errors.registrationMessage}
        </Typography>
      )}
      <FormControl className="formControl">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          name="username"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormControl>
      <FormControl className="formControl">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </Paper>
  );
}

export default RegisterForm;
