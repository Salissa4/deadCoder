
import './lightsOut.css';
import Board from './Board';

function Lights() {
  return (
    <div className="App">
      <Board size={5} chanceLightStartsOn={0.25} />
      <p>TURN ALL THE LIGHTS OFF</p>
    </div>
  );
}

export default Lights;
