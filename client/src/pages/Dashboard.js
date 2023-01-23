import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYER } from "../utils/queries";

export default function Dashboard() {
    const playerid = "63cca13febef176eb99c6fe7";
    const { data } = useQuery(QUERY_PLAYER, { variables: { id: playerid }})
    const username = data?.player.username || ""
    const rawTetrisScores = data?.player.tetrisScores || []
    const rawPongScores = data?.player.pongScores || []
    const rawTicTacToeScores = data?.player.ticTacToeScores || []

    console.log(rawTetrisScores)

    const tetrisScores = rawTetrisScores.map((x)=>{ return x.tetrisScoreValue})
    const ticTacToeScores = rawTicTacToeScores.map((x)=>{ return x.ticTacToeScoreValue}).sort(function(a,b){return b- a})
    const pongScores = rawPongScores.map((x)=>{ return x.pongScoreValue})

    return (
        <div>
            <p>Hello {username}, here are your HighScores</p>
            <p>Tetris:</p>
            <ol>
                {tetrisScores.map((score, index)=>{
                    return (
                        <li key={index}>{score}</li>
                    )
                })}
            </ol>
            <p>TicTacToe:</p>
            <ol>
                {ticTacToeScores.map((score, index)=>{
                    return (
                        <li key={index}>{score}</li>
                    )
                })}
            </ol>
        </div>
    );
}