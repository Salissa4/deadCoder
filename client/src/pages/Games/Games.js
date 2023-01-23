import './Games.css'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'
import { useQuery } from "@apollo/client";
import { QUERY_TETRIS_SCORES, QUERY_TICTACTOE_SCORES, QUERY_PONG_SCORES } from "../../utils/queries";

export default function Games (){
    const rawTetrisScores = useQuery(QUERY_TETRIS_SCORES)
    const allTetrisScores = rawTetrisScores.data?.allTetrisScores || []
    
    const tetrisScores = allTetrisScores.map((x)=>{
        const userName = x.userId.username;
        const score = x.tetrisScoreValue;
        return (
            [ userName, score ]
        )
    })

    const sortedTetrisScores = tetrisScores.sort(function(a,b){return b[1]-a[1]})

    const rawPongScores = useQuery(QUERY_PONG_SCORES)
    const allPongScores = rawPongScores.data?.allPongScores || []
    
    const pongScores = allPongScores.map((x)=>{
        const userName = x.userId.username;
        const score = x.pongScoreValue;
        return (
            [ userName, score ]
        )
    })

    const sortedPongScores = pongScores.sort(function(a,b){return b[1]-a[1]})

    const rawTicTacToeScores = useQuery(QUERY_TICTACTOE_SCORES)
    const allTicTacToeScores = rawTicTacToeScores.data?.allTicTacToeScores || []
    
    const ticTacToeScores = allTicTacToeScores.map((x)=>{
        const userName = x.userId.username;
        const score = x.ticTacToeScoreValue;
        return (
            [ userName, score ]
        )
    })

    const sortedTicTacToeScores = ticTacToeScores.sort(function(a,b){return b[1]-a[1]})

    console.log(sortedPongScores)
    console.log(sortedTetrisScores)
    console.log(sortedTicTacToeScores)

    return (
        <Stack direction="row" spacing={5} alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}>
            <div className='games'>
            <Button variant= 'outlined' className= 'games' id='tetris' href='/games/tetris'> TETRIS
            </Button>
            <Button variant= 'outlined' className= 'games' id='tictactoe' href='games/tictactoe'> TICTACTOE
            </Button>
            <Button variant= 'outlined' className= 'games' id='lights'> LIGHTS OUT
            </Button>
            <Button variant= 'outlined' className= 'games' id='pong'>
            PONG
            </Button>
            </div>
        </Stack>
    )
}

