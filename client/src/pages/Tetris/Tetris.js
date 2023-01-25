//! Make sure we import our css here somewhere


//? We need to find a way to only return this when someone wants to play Tetris. 
import Game from './components/Game'
import Auth from "../../utils/auth";



export default function Tetris() {
 if (Auth.loggedIn()) {
    return (
        <div className="Tetris">
            <Game rows={20} columns={10} />
        </div>
    );
} else {
    return window.location.assign("/");
  }
}