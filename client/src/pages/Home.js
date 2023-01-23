import React from "react";
import { Button } from "@mui/material";


export default function Home() {
  return (

    <div className="pt-52 justify-center align-middle pt-80">
      <h2 className="text-stone-100 text-lg">ARE YOU DEAD YET?</h2>
      <div className="pt-5">
        <Button 
        variant="text" 
        className="mr-2" 
        href="/login"
        sx={{
          width: 100,
          fontFamily: "MenloRegular",
          fontSize: 17,
          color: 'white',
          border: 0.5,
          borderColor: '#929292',
          borderRadius: 0,
          mr: 3
        }}
        >
          YES
        </Button>
        <Button 
        variant="text" 
        className="ml-2" 
        href="/signup"
        sx={{
          width: 100,
          fontFamily: "MenloRegular",
          fontSize: 17,
          color: 'white',
          border: 0.5,
          borderColor: '#929292', 
          borderRadius: 0,
          ml: 6
                }}
        >
          NO
        </Button>
      </div>
    </div>

  );
}