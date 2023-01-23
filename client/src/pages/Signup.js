import React, { useEffect, useState } from "react";
import { TextField, Typography, Stack, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [userName, setUserName] = useState("");

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

  const firstNames = [
    "Mario",
    "Luigi",
    "PrincessPeach",
    "Toad",
    "Toadette",
    "Bowser",
    "Daisy",
    "Wario",
    "Waluigi",
    "Rosalina",
    "Goomba",
    "KoopaTroopa",
    "Koopalings",
    "Yoshi",
    "BabyMario",
    "BabyLuigi",
    "Kamek",
    "ShyGuy",
    "Cappy",
    "Kirby",
    "KingDedede",
    "MetaKnight",
    "WhispyWoods",
    "DonkeyKong",
    "DiddyKong",
    "DixieKong",
    "CrankyKong",
    "FunkyKong",
    "Link",
    "PrincessZelda",
    "Ganondorf",
    "Epona",
    "Sheik",
    "Pikachu",
    "DeepCut",
    "Mr.Coco",
    "Cap'nCuttlefish",
    "TomNook",
    "Blathers",
    "K.K.Slider",
    "Kapp'n",
    "CaptainOlimar",
    "Pikmin",
    "Bulborb",
    "Roughraff",
    "Snotsolong",
    "Samus",
    "Fox",
    "Ninjara",
    "Mechanica",
    "MasterMummy",
    "Helix",
    "Byte&Barq",
    "Twintelle",
    "DryBones",
  ];

  const lastNames = [
    "-Cutter",
    "-Carpenter",
    "-Clipper",
    "-Countersinker",
    "-Cutter",
    "-Driller",
    "-Edger",
    "-Electricdriller",
    "-Fastener",
    "-Glasscutter",
    "-Grinder",
    "-Hacksawer",
    "-Hammer",
    "-Handsawer",
    "-Hoe",
    "-Machete",
    "-Nails",
    "-Nut",
    "-Screwdriver",
    "-Ratchet",
    "-Reamer",
    "-Scraper",
    "-Screwer",
    "-Screwdriver",
    "-Sharpener",
    "-Squeegee",
    "-Stapler",
    "-Tacktillertongs",
    "-Woodworker",
  ];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  useEffect(() => {
    const onPageLoad = () => {
      setUserName(`${randomFirst}${randomLast}`);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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
            value={formState.userName}
            onChange={(e) => {
              setUserName(e.target.value);
              handleChange(e);
            }}
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
