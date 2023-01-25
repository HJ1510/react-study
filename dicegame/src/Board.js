import Dice from "./Dice";

function Board({ name, color, history }) {
  const num = history[history.length - 1] || 1;
  const sum = history.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{history.join(",")}</p>
    </div>
  );
}

export default Board;
