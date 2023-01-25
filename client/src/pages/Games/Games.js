import './Games.css';
import Navbar from '../../components/NavBar';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useQuery } from "@apollo/client";
import { QUERY_TETRIS_SCORES, QUERY_TICTACTOE_SCORES, QUERY_LIGHTS_OUT_SCORES } from "../../utils/queries";

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
    const tetrisHighScores = tetrisScores.sort((a,b)=>{return (b[1]-a[1])}).slice(0,5);

    const rawTicTacToeScores = useQuery(QUERY_TICTACTOE_SCORES)
    const allTicTacToeScores = rawTicTacToeScores.data?.allTicTacToeScores || []
    const ticTacToeScores = allTicTacToeScores.map((x)=>{
        const userName = x.userId.username;
        const score = x.ticTacToeScoreValue;
        return (
            [ userName, score ]
        )
    })
    const ticTacToeHighScores = ticTacToeScores.sort((a,b)=>{return (b[1]-a[1])}).slice(0,5)

    const rawLightsOutScores = useQuery(QUERY_LIGHTS_OUT_SCORES)
    const allLightsOutScores = rawLightsOutScores.data?.allLightsOutScores || []
    const lightsoutScores = allLightsOutScores.map((x)=>{
        const userName = x.userId.username;
        const score = x.lightsOutScoreValue;
        return (
            [ userName, score ]
        )
    })
    const lightsOutHighScores = lightsoutScores.sort((a,b)=>{return (b[1]-a[1])}).slice(0,5);

    return (
        <>
        <Navbar />
        <Grid container spacing={2} className="pt-40">  
            <Grid item xs={12} md={3} >
            <Button variant= 'outlined' className= 'games' id='tetris' href='/games/tetris'> 
            <div>TETRIS</div>
            </Button>
            <div className="pt-5 text-sm">
            HIGH SCORES
                <ul className='list'>
                    {tetrisHighScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ul>
            </div>
            </Grid>

            <Grid item xs={12} md={3}>
            <Button variant= 'outlined' className= 'games' id='tictactoe' href='games/tictactoe'> 
            <div>TICTACTOE</div>
            </Button>
            <div className="pt-5 text-sm">
            HIGH SCORES
                <ul className='list'>
                    {ticTacToeHighScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ul>
            </div>
            </Grid>

            <Grid item xs={12} md={3}>
            <Button variant= 'outlined' className= 'games' id='lights' href='/games/lights-out'>
            <div>Lights-Out</div>
            </Button>
            <div className="pt-5 text-sm">
            HIGH SCORES
                <ul className='list'>
                    {lightsOutHighScores.map( (x, index) => {
                        return (
                            <li key={index}>{x[0]} : {x[1]}</li>
                        )
                    })}
                </ul>
            </div>
            </Grid>

            <Grid item xs={12} md={3}>
            <Button variant= 'outlined' className= 'games' id='pong'>
            <div>PONG - COMING SOON</div>
            </Button>
            <div className="pt-5 text-sm">
            HIGH SCORES <br/><br/>
                COULD BE YOU!
            </div>
            </Grid>
        </Grid>
        </>

        
    )
}

