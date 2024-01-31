import { useState } from "react"
import Board from "./board"

const PlayerX = 'X';
const PlayerO = 'O';

function Pentago() {
    const [tiles1, setTiles1] = useState(Array(9).fill(null));
    const [tiles2, setTiles2] = useState(Array(9).fill(null));
    const [tiles3, setTiles3] = useState(Array(9).fill(null));
    const [tiles4, setTiles4] = useState(Array(9).fill(null));
    const [rot1, setRot1] = useState(0);
    const [rot2, setRot2] = useState(0);
    const [rot3, setRot3] = useState(0);
    const [rot4, setRot4] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(PlayerX);

    const handleTileClick = (index,board) => {
        if (board[index] !== null) {
            return;
        }
        const newTiles = [...board];
        newTiles[index] = playerTurn;

        switch(board) {
            case tiles1:
                setTiles1(newTiles);
                setRot1((rot1 + 90) % 360);
                break;
            case tiles2:
                setTiles2(newTiles);
                setRot2((rot2 + 90) % 360);
                break;
            case tiles3:
                setTiles3(newTiles);
                setRot3((rot3 + 90) % 360);
                break;
            case tiles4:
                setTiles4(newTiles);
                setRot4((rot4 + 90) % 360);
                break;
            default:
                break;
        }

        if (playerTurn === PlayerX) {
            setPlayerTurn(PlayerO);
        }
        else {
            setPlayerTurn(PlayerX);
        }
    }



    return (
        <div className="pentago">
            <Board playerTurn={playerTurn} tiles={tiles1} onTileClick={(index) => handleTileClick(index, tiles1)} rotation={rot1}></Board>
            <Board playerTurn={playerTurn} tiles={tiles2} onTileClick={(index) => handleTileClick(index, tiles2)} rotation={rot2}></Board>
            <Board playerTurn={playerTurn} tiles={tiles3} onTileClick={(index) => handleTileClick(index, tiles3)} rotation={rot3}></Board>
            <Board playerTurn={playerTurn} tiles={tiles4} onTileClick={(index) => handleTileClick(index, tiles4)} rotation={rot4}></Board>
        </div>
    )
}

export default Pentago