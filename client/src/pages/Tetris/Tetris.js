//! Make sure we import our css here somewhere


//? We need to find a way to only return this when someone wants to play Tetris. 
import Game from './components/Game'




export default function Tetris() {
    return (
        <div className="Tetris">
            <Game rows={20} columns={10} />
        </div>
    );
}