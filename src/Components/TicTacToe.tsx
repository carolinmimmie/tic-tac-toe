import { useEffect, useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  // Skapar ett state 'value' som innehåller en array med 9 rutor, alla från början satta till null (tomma).
  // Detta representerar spelplanen.
  const [value, setValue] = useState(Array(9).fill(null));

  // Håller reda på vilken spelares tur det är, börjar med "X".
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDrawMatch, setIsDrawMatch] = useState(false);

  const handleX = () => {
    setCurrentPlayer("X");
  };

  const handle0 = () => {
    setCurrentPlayer("0");
  };

  const handleNewGame = () => {
    setValue(Array(9).fill(null));
    setWinner(null);
    setIsDrawMatch(false);
  };

  const checkWinner = () => {
    const winIndexs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winIndexs.length; i++) {
      const [a, b, c] = winIndexs[i];
      console.log(winIndexs);
      if (value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  };
  // Funktion som körs när en ruta klickas på.
  const handleClick = (index: number) => {
    if (value[index] === null && !winner && !isDrawMatch) {
      // Kopierar nuvarande state (value-arrayen) så att vi inte ändrar den direkt (immutabilitet).
      const updateValue = [...value];

      // Sätter den klickade rutan till nuvarande spelares symbol ("X" eller "0").
      updateValue[index] = currentPlayer;

      // Uppdaterar value-state med den nya arrayen.
      setValue(updateValue);

      // Byter spelare: Om det var "X" så blir det "0", annars "X".
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
    }
  };

  const isboardfull = () => {
    return value.every((square) => square !== null);
  };

  useEffect(() => {
    const newWinner = checkWinner();
    if (newWinner) {
      setWinner(newWinner);
    } else if (isboardfull()) {
      setIsDrawMatch(true);
    }
  }, [value]);
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board onClick={handleClick} value={value} />
      {winner ? (
        <h1>Winner:{winner}</h1>
      ) : isDrawMatch ? (
        <h1> Draw Match</h1>
      ) : (
        <h1> Player:{currentPlayer}</h1>
      )}
      <div>
        <h2>Select player</h2>
        <button type="button" onClick={handleX}>
          X
        </button>
        <button type="button" onClick={handle0}>
          0
        </button>
      </div>
      <button type="button" onClick={handleNewGame}>
        Start new game
      </button>
    </div>
  );
};

export default TicTacToe;
