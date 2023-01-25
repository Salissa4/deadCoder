import React, { useEffect, useState } from "react";
import { TextField, Typography, Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";
import randomUsernames, {firstNames, lastNames} from '../assets/login/RandomUsernames';


export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [randomName, setRandomName] = useState('')
  const newRandomName = randomUsernames(firstNames, lastNames)
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

      console.log(data)

      Auth.login(data.addPlayer.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-52">
      <form onSubmit={handleFormSubmit}>
        <Stack
          spacing={3}
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
            {/* {" "}
            SIGN UP WITH A GENERATED USERNAME OR CREATE YOUR OWN{" "} */}
          </Typography>
          <label htmlFor="username" className="fontFamily-MenloRegular text-lg">
            CHOOSE USERNAME
          </label>
          <input
            type="username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border border-gray-400 focus:bg-transparent"
          ></input>
          <label htmlFor="password" className=" pt-10 fontFamily-MenloRegular text-lg">
            CHOOSE PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="bg-transparent p-2 text-stone-100 text-lg border border-gray-400 focus:bg-transparent"
          ></input>
          <Button
            variant="text"
            id="loginButton"
            type="submit"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 17,
              color: "white",
              cursor: "pointer",
            }}
          >
            -SIGN UP-
          </Button>

          <p>
            -OR-
          </p>

          <Button
            variant='text'
            id='randomGenerateButton'
            type='button'
            sx={{
              width: 200,
              fontFamily: 'MenloRegular',
              fontSize: 17,
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => {
              setRandomName(`${newRandomName}`)
            }}
            >
              -GENERATE RANDOM USERNAME-
            </Button>
            {/* new username generators below the button */}
            <p>{randomName}</p>
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
