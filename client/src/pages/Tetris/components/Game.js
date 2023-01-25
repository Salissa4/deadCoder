import Menu from './Menu'
import Tetris from './TetrisGame';

import { useGameOver } from '../hooks/useGameOver';
import { useMutation } from '@apollo/client';
import { ADD_TETRIS_SCORE } from '../../../utils/mutations'
import Auth from '../../../utils/auth';

const Game = ({ rows, columns }) => {
    //getting a player - called randplayerID due to legacy issues
    const randplayerID = Auth.getProfile().data._id;

    //tetris-scoring mutation
    const [addScore, { error }] = useMutation(ADD_TETRIS_SCORE)

    const [gameOver, setGameOver, resetGameOver] = useGameOver();
  
    const start = () => resetGameOver();

    if(randplayerID) {
      return (
        <div className="Game">
          {gameOver ? (
            <Menu onClick={start} />
          ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver} addScore={addScore} randplayerID={randplayerID}/>
          )}
        </div>
      );
    }
  };
  
  export default Game;