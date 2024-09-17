import { useState } from "react";

//Le mot-clé default indique aux autres fichiers utilisant votre code qu’il s’agit là de la fonction principale de votre fichier.
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //initialisation du tableau

  function handleClick(val) {
    let newTab = squares.slice(); //copie du tableau
    newTab[val] = "X"; //Mise à jour de la valeur de l'indice donnée
    setSquares(newTab); //on met à jour le tableau
  }

  return (
    <>
      <div className="board-row">
        <Square square={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square square={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square square={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square square={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square square={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square square={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square square={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square square={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square square={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}

function Square({ square, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {square}
    </button>
  );
}
