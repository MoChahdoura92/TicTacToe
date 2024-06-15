import { useState } from "react";

const initialGameBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}){
    const[gameBoard, setGameBoard]= useState(initialGameBoard)
    
    function handelSelectedSquare(rowIndex, colIndex){
        setGameBoard((previousGameBoard)=>{
            const updatedGameBoard =[...previousGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedGameBoard ;
        });
        onSelectSquare()
    }

    return (
                <ol id="game-board">
                    {gameBoard.map((row, rowIndex)=>(
                        <li key ={rowIndex}>
                            <ol>
                                {row.map((playerSymbol, colIndex)=>(
                                    <li key={colIndex}>
                                        <button onClick={() => handelSelectedSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
    );

}