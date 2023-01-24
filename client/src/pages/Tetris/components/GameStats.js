import './GameStats.css'

import React from "react";
import { Button } from '@mui/material';

const GameStats = ({ gameStats }) =>  {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li id="stats">LEVEL</li>
      <li className="value">{level}</li>
      <li id="stats">LINES TO LEVEL</li>
      <li className="value">{linesToLevel}</li>
      <li id="stats">POINTS</li>
      <li className="value">{points}</li>
      <Button  className='buttontetris'sx={{
              fontFamily: "MenloRegular",
              fontSize: 15,
              color: "white",
            }} href='/games'> GO BACK </Button>
    </ul>
  );
}

export default React.memo(GameStats);