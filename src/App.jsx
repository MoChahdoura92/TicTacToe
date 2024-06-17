import { useState } from "react";

import Log from "./components/log";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  console.log(gameTurns[0])
  if(gameTurns.length > 0 && gameTurns[0].player==="X"){
    currentPlayer="O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns]= useState([]);
  //const [activePlayer, setActivePlayer]=useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);
 
  let gameBoard= initialGameBoard;
  let winner ;

    for(const turn of gameTurns){
        const { square, player } = turn ;
        const { row,col } = square ;
        gameBoard[row][col]= player ;
    }

  for (const combi of WINNING_COMBINATIONS ){
    const firstSquareSymbol = gameBoard[combi[0].row][combi[0].column];
    const secondSquareSymbol = gameBoard[combi[1].row][combi[1].column];
    const thirdSquareSymbol = gameBoard[combi[2].row][combi[2].column];

    if (
          firstSquareSymbol&&
          firstSquareSymbol === secondSquareSymbol &&
          secondSquareSymbol === thirdSquareSymbol
        ) {
           winner = firstSquareSymbol;
        }

  }

  const hasDraw = gameTurns.length===9 && !winner ;

  function handleSelectSquare(rowIndex, colIndex){
  //setActivePlayer((curActivePlayer)=> curActivePlayer==="X" ? "O" : "X" );
    setGameTurns((prevTurns)=> {
      const activePlayer = deriveActivePlayer(prevTurns);
      const updateTurns=[
        {square:{row:rowIndex, col:colIndex}, player: activePlayer},...prevTurns]
        return updateTurns;
    });
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"}></Player>
        </ol>
        { winner || hasDraw && <GameOver winner={winner}/> }
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
