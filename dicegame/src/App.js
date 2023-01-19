import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);

  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setHistory([...history, nextNum]);
    setNum(nextOtherNum);
    setSum(otherSum + nextOtherNum);
    setHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} history={history} />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          sum={otherSum}
          history={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;
