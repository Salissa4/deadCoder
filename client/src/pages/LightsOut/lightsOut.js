
import './lightsOut.css';
import Board from './BoardLights';

function Lights() {
  return (
    <div className="AppLights">
      <Board size={5} chanceLightStartsOn={0.25} />
      <p>TURN ALL THE LIGHTS OFF</p>
    </div>
  );
}

export default Lights;
