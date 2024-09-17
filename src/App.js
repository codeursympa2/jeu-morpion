import { useState } from "react";

//Le mot-clé default indique aux autres fichiers utilisant votre code qu’il s’agit là de la fonction principale de votre fichier.
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //initialisation du tableau

  function handleClick(val) {
    let newTab = squares.slice(); //copie du tableau (Approche par immutabilité)
    newTab[val] = "X"; //Mise à jour de la valeur de l'indice donnée
    setSquares(newTab); //on met à jour le tableau
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ square, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {square}
    </button>
  );
}
