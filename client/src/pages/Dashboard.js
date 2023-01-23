import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYER, QUERY_ALL_PLAYERS} from "../utils/queries";

export default function Dashboard() {
    //random player until we have login/sign-up working
    const allPlayersData = useQuery(QUERY_ALL_PLAYERS);
    const allPlayers = allPlayersData.data?.allPlayers || [];
    const randplayerID = allPlayers[3]?._id || []

    //console.log(randplayer)

    const playerid = randplayerID;
    const { data } = useQuery(QUERY_PLAYER, { variables: { id: playerid }})
    const username = data?.player.username || ""
    const rawTetrisScores = data?.player.tetrisScores || []
    const rawPongScores = data?.player.pongScores || []
    const rawTicTacToeScores = data?.player.ticTacToeScores || []

    const tetrisScores = rawTetrisScores.map((x)=>{ return x.tetrisScoreValue})
    const ticTacToeScores = rawTicTacToeScores.map((x)=>{ return x.ticTacToeScoreValue}).sort(function(a,b){return b- a})
    const pongScores = rawPongScores.map((x)=>{ return x.pongScoreValue})

    return (
        <div>
            Hello {username}, here are your HighScores<br/>
            Tetris:
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