import { useState } from "react";

export default function GameBoard({onSelectSquare, board}){
    
//    const[gameBoard, setGameBoard]= useState(initialGameBoard)
    
//    function handelSelectedSquare(rowIndex, colIndex){
//        setGameBoard((previousGameBoard)=>{
//            const updatedGameBoard =[...previousGameBoard.map(innerArray => [...innerArray])];
//            updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
//            return updatedGameBoard ;
//        });
//        onSelectSquare()
//    }

    return (
                <ol id="game-board">
                    {board.map((row, rowIndex)=>(
                        <li key ={rowIndex}>
                            <ol>
                                {row.map((playerSymbol, colIndex)=>(
                                    <li key={colIndex}>
                                        <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
    );

}