import React, { useState } from "react";
import { Stack, TextField, Button, Input } from "@mui/material/";
import { useMutation } from "@apollo/client";
import { LOGIN_PLAYER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Login(props) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [loginPlayer, { error, data }] = useMutation(LOGIN_PLAYER);

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
      const { data } = await loginPlayer({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div className="pt-52">
      <form onSubmit={handleFormSubmit}>
        <Stack
          spacing={3}
          className="loginform"
          alignItems="center"
          justifyContent="center"
        >
          <label htmlFor="username" className="fontFamily-MenloRegular text-lg">
            USERNAME
          </label>
          <input
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-sm border border-gray-400 focus:bg-transparent"
          ></input>
          <label htmlFor="password" className="fontFamily-MenloRegular text-lg pt-10">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-sm border border-gray-400 focus:bg-transparent"
          ></input>
          <Button
            variant="text"
            id="loginButton"
            type="submit"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 15,
              color: "white",
            }}
          >
            -LOGIN-
          </Button>
          {error ? (
            <div>
              <p className="text-xl text-red-500">INVALID CREDENTIALS</p>
            </div>
          ) : null}
        </Stack>
      </form>
    </div>
  );
}
