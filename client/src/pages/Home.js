import React from "react";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      ARE YOU DEAD YET?
      <div>
        <Button variant="text" href="/login">
          YES
        </Button>
        <Button variant="text" href="/signup">
          NO
        </Button>
      </div>
    </div>
  );
}