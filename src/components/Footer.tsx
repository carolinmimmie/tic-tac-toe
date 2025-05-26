interface footerProps {
  handleX: () => void;
  handle0: () => void;
  handleNewGame: () => void;
}

export const Footer = ({ handleX, handle0, handleNewGame }: footerProps) => {
  return (
    <footer>
      {" "}
      {/* Knapp för att välja vilken spelare som börjar */}
      <div>
        <h2>Select player</h2>
        <button type="button" onClick={handleX}>
          X
        </button>
        <button type="button" onClick={handle0}>
          0
        </button>
      </div>
      {/* Knapp för att starta om spelet */}
      <button type="button" onClick={handleNewGame}>
        Start new game
      </button>
    </footer>
  );
};
