import { useEffect, useState } from "react";
import Board from "./Board";
import Header from "../Header";
import { Footer } from "../Footer";

const TicTacToe = () => {
  // Skapar en array med 9 platser, alla tomma i början (null = tom ruta)
  const [value, setValue] = useState(Array(9).fill(null));

  // Håller reda på vilken spelare som ska spela ("X" börjar)
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Sparar vinnaren, null om ingen vunnit ännu
  const [winner, setWinner] = useState(null);

  // Sparar om matchen är oavgjord (alla rutor fyllda men ingen vinnare)
  const [isDrawMatch, setIsDrawMatch] = useState(false);

  // Sätt spelaren till "X" när man klickar på knappen
  const handleX = () => {
    setCurrentPlayer("X");
  };

  // Sätt spelaren till "0" när man klickar på knappen
  const handle0 = () => {
    setCurrentPlayer("0");
  };

  // Starta om spelet: tom spelplan, ingen vinnare och ingen oavgjord match
  const handleNewGame = () => {
    setValue(Array(9).fill(null));
    setWinner(null);
    setIsDrawMatch(false);
  };

  // Kollar om någon har vunnit genom att kolla alla vinstkombinationer
  const checkWinner = () => {
    const winIndexs = [
      [0, 1, 2], // Rad 1
      [3, 4, 5], // Rad 2
      [6, 7, 8], // Rad 3
      [0, 3, 6], // Kolumn 1
      [1, 4, 7], // Kolumn 2
      [2, 5, 8], // Kolumn 3
      [0, 4, 8], // Diagonal från vänster till höger
      [2, 4, 6], // Diagonal från höger till vänster
    ];
    for (let i = 0; i < winIndexs.length; i++) {
      const [a, b, c] = winIndexs[i];
      // Om samma spelare finns i alla tre rutorna i en vinstkombination
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a]; // Returnera vinnaren ("X" eller "0")
      }
    }
    return null; // Om ingen vinner, returnera null
  };

  // Funktion som körs när man klickar på en ruta
  const handleClick = (index: number) => {
    // Endast om rutan är tom och ingen har vunnit eller oavgjort
    if (value[index] === null && !winner && !isDrawMatch) {
      // Kopiera arrayen så vi inte ändrar state direkt (immutabilitet)
      const updateValue = [...value];

      // Sätt rutan till aktuell spelares symbol
      updateValue[index] = currentPlayer;

      // Uppdatera state med nya spelplanen
      setValue(updateValue);

      // Byt spelare (X blir 0, 0 blir X)
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
    }
  };

  // Kolla om spelplanen är full, dvs inga tomma rutor kvar
  const isboardfull = () => {
    return value.every((square) => square !== null);
  };

  // När spelplanen ändras kolla om någon vunnit eller om det är oavgjort
  useEffect(() => {
    const newWinner = checkWinner();
    if (newWinner) {
      setWinner(newWinner); // Sätt vinnaren
    } else if (isboardfull()) {
      setIsDrawMatch(true); // Om full bräda men ingen vinnare → oavgjort
    }
  }, [value]);

  return (
    <div className="tictactoe-container">
      <header className="tictactoe-header">
        <Header
          winner={winner}
          isDrawMatch={isDrawMatch}
          currentPlayer={currentPlayer}
        />
      </header>

      <section className="tictactoe-board">
        <Board handleClick={handleClick} value={value} />
      </section>

      <footer className="tictactoe-footer">
        <Footer
          handleX={handleX}
          handle0={handle0}
          handleNewGame={handleNewGame}
        />
      </footer>
    </div>
  );
};

export default TicTacToe;
