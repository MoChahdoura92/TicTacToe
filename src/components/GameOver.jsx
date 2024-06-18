export default function GameOver({winner , execute}){

    return (
        <div id = "game-over">
            <h2>Game Over !</h2>
            {winner && <p>{winner} won !</p>}
            {!winner && <p>it s a draw !</p>}
            <p><button onClick={execute}>Rematch!</button></p>
        </div>
    );
}