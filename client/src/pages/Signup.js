import React, { useEffect, useState } from "react";
import { TextField, Typography, Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [addPlayer, { error, data }] = useMutation(ADD_PLAYER);

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
    let test = 0;
    console.log(test);
    test++;
    console.log(test);

    try {
      const { data } = await addPlayer({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-52 mx-auto">
      <form onSubmit={handleFormSubmit}>
        <Stack
          spacing={5}
          className="signup"
          alignItems="center"
          justifyContent="center"
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
          <label htmlFor="username" className="fontFamily-MenloRegular text-xl">
            USERNAME
          </label>
          <input
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border-b-2 border-stone-100 focus:bg-transparent"
          ></input>
          <label htmlFor="password" className="fontFamily-MenloRegular text-xl">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border-b-2 border-stone-100 focus:bg-transparent"
          ></input>
          <Button
            variant="text"
            id="loginButton"
            type="submit"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 20,
              color: "white",
              cursor: "pointer",
            }}
          >
            -SIGN UP-
          </Button>
          {error ? (
            <div>
              <p className="text-2xl text-red-500">INVALID CREDENTIALS</p>
            </div>
          ) : null}
        </Stack>
      </form>
    </div>
  );
}
