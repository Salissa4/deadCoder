import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../../utils/auth";
import { ADD_LIGHTS_OUT_SCORE } from "../../utils/mutations";
import { QUERY_ALL_PLAYERS } from "../../utils/queries";
import './BoardLights.css';
import Cell from "./CellLights";


function Board(props) {
    const [clicks, setClicks] = useState(0);
    const randplayerID = Auth.getProfile().data._id
    const [addScore] = useMutation(ADD_LIGHTS_OUT_SCORE)

    const { size, chanceLightStartsOn } = props;

    /** randomLight: returns random boolean */
    function randomLight(){
        return Math.random() < chanceLightStartsOn;
    }

    //create size*size matrix state, randomly setting isOn to true/false
    const lightsGrid = Array.from({ length: size }).map( 
            row => ( row = 
            Array.from({ length: size }).map(
                cell => (cell = randomLight())
            )
        )

    )

    const [ board, setBoard ] = useState({ grid: lightsGrid });
    

    /** toggleLight: toggles a single light on/off in the state */
    const toggleLight = function(cellIndex){
        let [ cellRowIndex, cellColIndex ] = cellIndex.split("");
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);

        setBoard(currSt => (
            {   ...currSt,
                grid: currSt.grid.map(
                    (row, rowIndex) => ( rowIndex === cellRowIndex
                            ? row.map( (col, colIndex) => colIndex === cellColIndex ? !col : col)
                            : row
                    ))
            }
        ))
    }

    /** toggleAllLights: toggles clicked-on light and its neighbours */
    function toggleAllLights(cellIndex){
        let [ cellRowIndex, cellColIndex ] = cellIndex.split("");
        cellRowIndex = parseInt(cellRowIndex);
        cellColIndex = parseInt(cellColIndex);
        
        toggleLight(cellIndex);                                 //toggle clicked on cell
        toggleLight([cellRowIndex, cellColIndex + 1].join("")); //toggle right
        toggleLight([cellRowIndex, cellColIndex - 1].join("")); //toggle left
        toggleLight([cellRowIndex + 1, cellColIndex].join("")); //toggle down
        toggleLight([cellRowIndex - 1, cellColIndex].join("")); //toggle up
    
    }

    /** hasWon: checks if all lights are off */
    function hasWon() {
        return board.grid.every( row => row.every( cell => !cell ) )
    }
    
    
    const gridDisplay = board.grid.map( function (row, rowIndex) {
            return (
                <div className="Board-row" key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <Cell 
                            key={[rowIndex, colIndex].join("")}
                            cellIndex={[rowIndex, colIndex].join("")} 
                            isOn={board.grid[rowIndex][colIndex]}
                            toggleLight={toggleAllLights}
                            setClicks={setClicks}
                            clicks={clicks}
                         />
                    ))}
                </div>
            );
        });
    
    const handleReplay = async () => {
        const scoredgame = await addScore({ variables: { userId: randplayerID, score: clicks }})
        console.log(scoredgame)
        //TODO: Reset board
    }

    const handleGoHome = async() => {
        const scoredgame = await addScore({ variables: { userId: randplayerID, score: clicks }})
        console.log(scoredgame)

        //TODO: Route to homescreen
    }

    return(
        <div className="BoardLights">
           {hasWon() ? 
                    <div className="Board-hasWon">
                        <button onClick={handleReplay}>Play Again?</button >
                        <button onClick={handleGoHome}>Return to Home</button>
                    </div> 
                : gridDisplay }
        </div>
    )
}

export default Board;