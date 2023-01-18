import './Games.css'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'

export default function Games (){
    return (
        <Stack direction="row" spacing={5} alignItems="center"
        justify="center"
        style={{ minHeight: "80vh" }}>
            <div className='games'>
            <Button variant= 'outlined' className= 'games' id='tetris'> TETRIS
            </Button>
            <Button variant= 'outlined' className= 'games' id='tictactoe'> TICTACTOE
            </Button>
            <Button variant= 'outlined' className= 'games' id='fighter'> FIGHTER
            </Button>
            <Button variant= 'outlined' className= 'games' id='pong'>
            PONG
            </Button>
            </div>
        </Stack>
    )
}

