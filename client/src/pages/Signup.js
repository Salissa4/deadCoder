import React, { useEffect, useState } from "react";
import { TextField, Typography, Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";
import randomUsernames from "../assets/login/RandomUsernames";

export default function Signup() {

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_PLAYER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-52">
      <Stack
        spacing={5}
        className="signup"
        alignItems="center"
        justifyContent="center"
        onSubmit={handleFormSubmit}
      >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontFamily: "MenloRegular",
            }}
          >
            {" "}
            SIGN UP WITH A GENERATED USERNAME OR CREATE YOUR OWN{" "}
          </Typography>
          {/* <TextField
          hiddenLabel
          margin="normal"
          id="standard-basic"
          value={userName}
          variant="standard"
          sx={{ color: 'white', borderColor: 'white' }}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
          <label for="username" className="fontFamily-MenloRegular text-xl">
            USERNAME
          </label>
          <input
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border-b-2 border-stone-100 focus:bg-transparent"
          ></input>
          <label for="password" className="fontFamily-MenloRegular text-xl">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border-b-2 border-stone-100 focus:bg-transparent"
          >
          </input>
          {/* <TextField
          margin="normal"
          id="standard-basic"
          label="PASSWORD"
          type="password"
          variant="standard"
          
        /> */}
          <Button
            variant="text"
            id="loginButton"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 25,
              color: "white",
            }}
          >
            -SIGN UP-
          </Button>
          {error ? (
          <div>
            <p className="text-xl text-red-500">INVALID CREDENTIALS</p>
          </div>
        ) : null}
      </Stack>
    </div>
  );
}
