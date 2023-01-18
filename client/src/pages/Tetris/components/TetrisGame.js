import './TetrisGame.css'

import Board from './components/board'
import GameController from './components/GameController'
import GameStats from './components/GameStats'
import Previews from './components/Previews'

import { useBoard } from './hooks/useBoard'
import { useGameStats} from './hooks/useGameStats'
import { usePlayer } from './hooks/usePlayer'

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
      rows,
      columns,
      player,
      resetPlayer,
      addLinesCleared
    });

    return (
        <div className="Tetris">
          <Board board={board} />
          <GameStats gameStats={gameStats} />
          <Previews tetrominoes={player.tetrominoes} />
          <GameController
            board={board}
            gameStats={gameStats}
            player={player}
            setGameOver={setGameOver}
            setPlayer={setPlayer}
          />
        </div>
      );
    };
    
    export default Tetris;