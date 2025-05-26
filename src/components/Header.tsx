interface HeroProps {
  winner: string | null; // ändra från null till string | null
  isDrawMatch: boolean;
  currentPlayer: string;
}

const Header = ({ winner, isDrawMatch, currentPlayer }: HeroProps) => {
  const renderStatus = () => {
    if (winner) {
      return <h2>🏆 Winner: Player {winner} – Congratulations!</h2>;
    } else if (isDrawMatch) {
      return <h2>🤝 It's a draw! Try again!</h2>;
    } else {
      return <h2>🎯 Your turn: Player {currentPlayer}</h2>;
    }
  };
  return (
    <header>
      <h1> 🎮 Tic Tac Toe</h1>
      {renderStatus()}
      {!winner && !isDrawMatch && (
        <p> 🖱️ Click on a square to make your move!</p>
      )}
    </header>
  );
};

export default Header;
