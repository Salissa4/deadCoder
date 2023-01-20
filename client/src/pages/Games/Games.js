import './Games.css'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'

export default function Games (){
    return (
        <Stack direction="row" spacing={5} alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}>
            <div className='games'>
            <Button variant= 'outlined' className= 'games' id='tetris' href='/games/tetris'> TETRIS
            </Button>
            <Button variant= 'outlined' className= 'games' id='tictactoe'> TICTACTOE
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

