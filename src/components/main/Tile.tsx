interface tileProps {
  value: string;
  handleClick: () => void;
}

const Tile = ({ value, handleClick }: tileProps) => {
  return (
    <button onClick={handleClick} className="tile">
      {value}
    </button>
  );
};

export default Tile;
