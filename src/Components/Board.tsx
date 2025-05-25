import Tile from "./Tile";

interface boardProps {
  value: string[];
  onClick: (index: number) => void;
}

const Board = ({ value, onClick }: boardProps) => {
  return (
    <>
      <div>
        <Tile onClick={() => onClick(0)} value={value[0]} />
        <Tile onClick={() => onClick(1)} value={value[1]} />
        <Tile onClick={() => onClick(2)} value={value[2]} />
      </div>
      <div>
        <Tile onClick={() => onClick(3)} value={value[3]} />
        <Tile onClick={() => onClick(4)} value={value[4]} />
        <Tile onClick={() => onClick(5)} value={value[5]} />
      </div>
      <div>
        <Tile onClick={() => onClick(6)} value={value[6]} />
        <Tile onClick={() => onClick(7)} value={value[7]} />
        <Tile onClick={() => onClick(8)} value={value[8]} />
      </div>
    </>
  );
};

export default Board;
