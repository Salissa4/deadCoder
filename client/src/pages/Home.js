import React from "react";
import { Button } from "@mui/material";


export default function Home() {
  return (

    <div className="pt-52 justify-center align-middle">
      <h2 className="text-stone-100 text-2xl">ARE YOU DEAD YET?</h2>
      <div className="pt-10">
        <Button 
        variant="text" 
        className="text-xl mr-2" 
        href="/login"
        sx={{
          width: 200,
          fontFamily: "MenloRegular",
          fontSize: 15,
          color: 'white'
        }}
        >
          YES
        </Button>
        <Button 
        variant="text" 
        className="text-xl ml-2" 
        href="/signup"
        sx={{
          width: 200,
          fontFamily: "MenloRegular",
          fontSize: 15,
          color: 'white'
        }}
        >
          NO
        </Button>
      </div>
    </div>

  );
}