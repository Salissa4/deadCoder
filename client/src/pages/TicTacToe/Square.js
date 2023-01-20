import React from "react";
import User from '../../assets/Elements/User_TicTacToe.png'
import Computer from '../../assets/Elements/Computer_TicTacToe.png'
import './Square.css'

function Square(props) {
  return (
    <div className={'square'} {...props}>{props.x ? <img src={User} alt='user'></img> : (props.o ? <img src= {Computer} alt='computer'></img> : '')}</div>
  );
}

export default Square;