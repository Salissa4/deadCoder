import './TicTacToe.css';
import Board from "./BoardTicTacToe";
import Square from "./Square";
import { Button } from '@mui/material';
import {useState, useEffect, } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PLAYERS } from '../../utils/queries';
import { ADD_TICTACTOE_SCORE } from '../../utils/mutations';
import Auth from "../../utils/auth";

const defaultSquares = () => (new Array(9)).fill(null);


const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

function App() {
  //random player until we have login/sign-up working
  const randplayerID = Auth.getProfile().data._id

  const [squares, setSquares] = useState(defaultSquares());
  const [winner,setWinner] = useState(null);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [score, setScore] = useState(0);
  const [addScore] = useMutation(ADD_TICTACTOE_SCORE)

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
      setWinCount(winCount+1);
      if (winCount+1 - loseCount > 0) {
        setScore((winCount+1 - loseCount)*10)
      }
      setWinner('x');
      return
    }
    if (computerWon) {
      setLoseCount(loseCount+1)
      if (winCount - loseCount -1 > 0){
        setScore((winCount - loseCount-1)*10)
      }
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

  async function endSession() {
    await addScore({ variables: { userId: randplayerID, score: score }})
  }

if (Auth.loggedIn()) {
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
        <Button  className= 'tictacbutton' sx={{
              fontFamily: "MenloRegular",
              fontSize: 15,
              color: "white",
            }} href='/games' onClick={endSession}>SAVE SCORE AND GO BACK</Button>
            <br/>
        <Button  className= 'tictacbutton' sx={{
              fontFamily: "MenloRegular",
              fontSize: 15,
              color: "white",
            }} href='/games'> GO BACK </Button>
      </div>
      {!!winner && winner === 'x' && (
        <div className='tictacbody'>
          WIN
          <div>Score this session: {score}</div>
          <div className='tictacbutton' onClick={()=>handleReplay()}>PLAY AGAIN?</div>
        </div>
      )}
      {!!winner && winner === 'o' && (
        <div className='tictacbody'>
          LOSS
          <div>Score this session: {score}</div>
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
} else {
  return window.location.assign("/");
}
}

export default App;
