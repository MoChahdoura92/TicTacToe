import { useState } from "react";

import Log from "./components/log";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameTurns, setGameTurns]= useState([]);
  const [activePlayer, setActivePlayer]=useState("X");
  let currentPlayer = "X"

  if(gameTurns.length > 0 &&prevTurns[0].player ==="X"){
    currentPlayer="O"
  }

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer)=> curActivePlayer==="X" ? "O" : "X" );
    setGameTurns((prevTurns)=> {
      const updateTurns=[
        {square:{row:rowIndex, col:colIndex}, player: activePlayer}, 
        ...prevTurns
      ]
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
        <GameBoard onSelectSquare={()=>handleSelectSquare(rowIndex,colIndex)} activePlayerSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
  )
}

export default App
