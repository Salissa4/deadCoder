
import './lightsOut.css';
import Board from './BoardLights';
import { Button } from '@mui/material';

function Lights() {
  return (
    <div className="AppLights">
      <Button  sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 15,
              color: "white",
            }} href='/games'> GO BACK </Button>
      <Board size={5} chanceLightStartsOn={0.25} />
      <p>TURN ALL THE LIGHTS OFF</p>
    </div>
  );
}

export default Lights;
