interface tileProps {
  value: string;
  onClick: () => void;
}

const Tile = ({ value, onClick }: tileProps) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Tile;
