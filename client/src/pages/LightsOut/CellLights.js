import React from "react";
import './CellLights.css';


function Cell(props){
    const { cellIndex, isOn, toggleLight, setClicks, clicks } = props;

    function handleToggleLight() {
        setClicks(clicks+1)
        toggleLight(cellIndex);

    }

    
    return (
        <button 
            className={isOn?"Cell-on":"Cell-off"} 
            onClick={handleToggleLight}            
        ></button>
        
    );
}

export default Cell;