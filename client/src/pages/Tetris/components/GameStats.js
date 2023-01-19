import './GameStats.css'

import React from "react";

const GameStats = ({ gameStats }) =>  {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li className="stats">LEVEL</li>
      <li className="value">{level}</li>
      <li className="stats">LINES TO LEVEL</li>
      <li className="value">{linesToLevel}</li>
      <li className="stats">POINTS</li>
      <li className="value">{points}</li>
    </ul>
  );
}

export default React.memo(GameStats);