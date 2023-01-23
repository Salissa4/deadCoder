import './Games.css'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'
import { useQuery } from "@apollo/client";
import { QUERY_TETRIS_SCORES, QUERY_TICTACTOE_SCORES, /*QUERY_PONG_SCORES,*/ QUERY_LIGHTS_OUT_SCORES } from "../../utils/queries";

export default function Games (){
    const rawTetrisScores = useQuery(QUERY_TETRIS_SCORES)
    const allTetrisScores = rawTetrisScores.data?.allTetrisScores || []
    const tetrisScores = allTetrisScores.slice(0,5).map((x)=>{
        const userName = x.userId.username;
        const score = x.tetrisScoreValue;
        return (
            [ userName, score ]
        )
    })
    const sortedTetrisScores = tetrisScores.sort(function(a,b){return b[1]-a[1]})

    // const rawPongScores = useQuery(QUERY_PONG_SCORES)
    // const allPongScores = rawPongScores.data?.allPongScores || []
    
    // const pongScores = allPongScores.slice(0,5).map((x)=>{
    //     const userName = x.userId.username;
    //     const score = x.pongScoreValue;
    //     return (
    //         [ userName, score ]
    //     )
    // })

    // const sortedPongScores = pongScores.sort(function(a,b){return b[1]-a[1]})

    const rawTicTacToeScores = useQuery(QUERY_TICTACTOE_SCORES)
    const allTicTacToeScores = rawTicTacToeScores.data?.allTicTacToeScores || []
    
    const ticTacToeScores = allTicTacToeScores.slice(0,5).map((x)=>{
        const userName = x.userId.username;
        const score = x.ticTacToeScoreValue;
        return (
            [ userName, score ]
        )
    })

    const sortedTicTacToeScores = ticTacToeScores.sort(function(a,b){return b[1]-a[1]})

    const rawLightsOutScores = useQuery(QUERY_LIGHTS_OUT_SCORES)
    
    const allLightsOutScores = rawLightsOutScores.data?.allLightsOutScores || []
    const lightsoutScores = allLightsOutScores.slice(0,5).map((x)=>{
        const userName = x.userId.username;
        const score = x.lightsOutScoreValue;
        return (
            [ userName, score ]
        )
    })
    const sortedLightsOutScores = lightsoutScores.sort(function(a,b){return b[1]-a[1]})

    console.log(allLightsOutScores)
    //console.log(sortedLightsOutScores)

    return (
        <Stack direction="row" spacing={5} alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}>
            <div className='games'>
            <Button variant= 'outlined' className= 'games' id='tetris' href='/games/tetris'> <div>TETRIS<br/><br/>
            HighScores:<br/><br/>
                <ol>
                    {sortedTetrisScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ol>
            </div>
            </Button>
            <Button variant= 'outlined' className= 'games' id='tictactoe' href='games/tictactoe'> <div>TICTACTOE<br/><br/>
            HighScores:<br/><br/>
                <ol>
                    {sortedTicTacToeScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ol>
            </div>
            </Button>
            <Button variant= 'outlined' className= 'games' id='lights'> <div>Lights-Out<br/><br/>
            HighScores:<br/><br/>
                <ol>
                    {sortedLightsOutScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ol>
            </div>
            </Button>
            <Button variant= 'outlined' className= 'games' id='pong'>
            PONG
            </Button>
            </div>
        </Stack>
    )
}

