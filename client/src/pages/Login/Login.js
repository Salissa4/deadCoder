import React, { useState } from "react";
import { Stack, TextField, Button, Input } from "@mui/material/";
import { useMutation } from "@apollo/client";
import { LOGIN_PLAYER } from "../../utils/mutations";
import Auth from "../../utils/auth";


export default function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_PLAYER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="pt-52">
      <Stack spacing={5} 
      className="login" 
      onSubmit={handleFormSubmit}
      alignItems="center"
      justifyContent="center"
      >
        {/* <Input
          id="standard-basic"
          label="USERNAME"
          variant="standard"
          onChange={handleChange}
          sx={{ color: 'white' }}
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
        {/* <Input
          name="password"
          type="password"
          label="PASSWORD"
          variant="standard"
          onChange={handleChange}
          sx={{ color: 'white' }}
        /> */}
        <label for="password" className="fontFamily-MenloRegular text-xl">
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
          sx={{
            width: 200,
            fontFamily: "MenloRegular",
            fontSize: 15,
            color: 'white'
          }}
        >
          LOGIN
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


