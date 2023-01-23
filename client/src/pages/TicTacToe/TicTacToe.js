import './TicTacToe.css';
import Board from "./BoardTicTacToe";
import Square from "./Square";
import {useState, useEffect} from 'react';

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

function App() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner,setWinner] = useState(null);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  useEffect(() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;

    const linesThatAre = (a,b,c) => {
      return lines.filter(squareIndexes => {
        const squareValues = squareIndexes.map(index => squares[index]);
        return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValues.sort());
      });
    };

    const emptyIndexes = squares
      .map((square,index) => square === null ? index : null)
      .filter(val => val !== null);
    
    const playerWon = linesThatAre('x', 'x', 'x').length > 0;
    const computerWon = linesThatAre('o', 'o', 'o').length > 0;
    const draw = emptyIndexes.length === 0;

    if (playerWon) {
      setWinCount(winCount+1)
      setWinner('x');
      return
    }
    if (computerWon) {
      setLoseCount(loseCount+1)
      setWinner('o');
      return
    }
    if(draw){
      setWinner('draw')
      return
    }

    const putComputerAt = index => {     
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    };

    if (isComputerTurn && !winner) {
      let timer = 1000;

      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(index => squares[index] === null)[0];
        setTimeout(()=>{putComputerAt(winIndex)},timer);
        return;
      }

      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(index => squares[index] === null)[0];
        setTimeout(()=>{putComputerAt(blockIndex)},timer);
        return;
      }

      const linesToContinue = linesThatAre('o', null, null);
      if (linesToContinue.length > 0) {
        const continueIndex = linesToContinue[0].filter(index => squares[index] === null)[0]
        setTimeout(()=>{putComputerAt(continueIndex)},timer);
        return;
      }

      const randomIndex = emptyIndexes[ Math.ceil(Math.random()*emptyIndexes.length) ];
      setTimeout(()=>{putComputerAt(randomIndex)},timer);
    }
  }, [squares], [winCount], [loseCount]);

  const handleSquareClick = (index) => {
    if (winner) {
      return
    }
    
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = 'x';
      setSquares([...newSquares]);
    }
  }

  function handleReplay() {
    setWinner(null);
    setSquares(defaultSquares);
  }

  function endSession() {
    const score = (winCount - loseCount) * 100
    console.log(score)
    //TODO: Send score to server
    //TODO: Route back to homescreen
  }

  return (
    <main className='tictac'>
      <Board>
        {squares.map((square,index) =>
          <Square
            x = {square==='x' ? 1 : 0}
            o = {square==='o' ? 1 : 0}
            onClick={() => handleSquareClick(index)} 
            key={index}
          />
        )}
      </Board >
      <div className='stats'>
        <div className='win'>WINS {winCount}</div>
        <div>LOSSES {loseCount}</div>
        <div className='tictacbutton' onClick={()=>endSession()}>SAVE SCORE AND PLAY AGAIN</div>
      </div>
      {!!winner && winner === 'x' && (
        <div className='tictacbody'>
          WIN
          <div className='tictacbutton' onClick={()=>handleReplay()}>PLAY AGAIN?</div>
        </div>
      )}
      {!!winner && winner === 'o' && (
        <div className='tictacbody'>
          LOSS
          <div className='tictacbutton' onClick={()=>handleReplay()}>PLAY AGAIN?</div>
        </div>
      )}
      {!!winner && winner === 'draw' && (
        <div className='tictacbody'>
          DRAW
          <div className='tictacbutton' onClick={()=>handleReplay()}>PLAY AGAIN?</div>
        </div>
      )}
    </main>
  );
}

export default App;
