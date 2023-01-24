import Menu from './Menu'
import Tetris from './TetrisGame';

import { useGameOver } from '../hooks/useGameOver';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PLAYERS } from '../../../utils/queries';
import { ADD_TETRIS_SCORE } from '../../../utils/mutations'

const Game = ({ rows, columns }) => {
    //getting a random player
    const allPlayersData = useQuery(QUERY_ALL_PLAYERS);
    const allPlayers = allPlayersData.data?.allPlayers || [];
    const randplayerID = allPlayers[0]?._id || [];

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