import "./Login.css";
import React from "react";
import { Box, TextField, Button } from "@mui/material/";

export default function Login() {
  return (
    <div>
      <Box className="login">
        <TextField id="standard-basic" label="USERNAME" variant="standard" />
        <TextField id="standard-basic" label="PASSWORD" variant="standard" />
      </Box>
      <Button
        variant="text"
        id="loginButton"
        sx={{
          width: 200,
          fontFamily: "MenloRegular",
          fontSize: 15,
        }}
      >
        Login
      </Button>
    </div>
  );
}
