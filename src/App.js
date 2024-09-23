import { useState } from "react";
//Le mot-clé default indique aux autres fichiers utilisant votre code qu’il s’agit là de la fonction principale de votre fichier.

export default function Game() {
  //Hooks
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Aller au coup #" + move;
    } else {
      description = "Revenir au début";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            xIsNext={xIsNext}
            onPlay={handlePlay}
          />
        </div>

        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
function Board({ xIsNext, squares, onPlay }) {
  function calculateWinner() {
    //Définition des lignes correctes
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }

  function handleClick(i) {
    const newTab = squares.slice(); //on copie le tableau (immutablité)
    //Si la case est remplie on ne fait rien
    if (newTab[i] || calculateWinner()) {
      return;
    }

    if (xIsNext) {
      newTab[i] = "X";
    } else {
      newTab[i] = "O";
    }
    onPlay(newTab); // on renvoie la valeur à Game via handlePlay
  }

  let status = "";

  const winner = calculateWinner();

  if (winner) {
    status = winner + " a gagné.";
  } else {
    status = xIsNext ? "Prochain tour : X" : "Prochain tour : 0";
  }

  return (
    <>
      <div className="status">{status}</div>
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

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
