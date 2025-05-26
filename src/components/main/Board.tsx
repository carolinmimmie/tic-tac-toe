import Tile from "./Tile";

interface boardProps {
  value: string[];
  handleClick: (index: number) => void;
}

const Board = ({ value, handleClick }: boardProps) => {
  return (
    <main>
      <div>
        <Tile handleClick={() => handleClick(0)} value={value[0]} />
        <Tile handleClick={() => handleClick(1)} value={value[1]} />
        <Tile handleClick={() => handleClick(2)} value={value[2]} />
      </div>
      <div>
        <Tile handleClick={() => handleClick(3)} value={value[3]} />
        <Tile handleClick={() => handleClick(4)} value={value[4]} />
        <Tile handleClick={() => handleClick(5)} value={value[5]} />
      </div>
      <div>
        <Tile handleClick={() => handleClick(6)} value={value[6]} />
        <Tile handleClick={() => handleClick(7)} value={value[7]} />
        <Tile handleClick={() => handleClick(8)} value={value[8]} />
      </div>
    </main>
  );
};

export default Board;
