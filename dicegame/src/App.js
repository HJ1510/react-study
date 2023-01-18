import { useState } from "react";
import Dice from "./Dice";
import HandIcon from "./HandIcon";
import HandButton from "./HandButton";
import Button from "./Button";

function App() {
  const handleClick = (value) => console.log(value);
  const [num, setNum] = useState(1);
  return (
    <div>
      <div>
        <Button value="던지기" onClick={handleClick}>
          던지기
        </Button>
        <Button value="처음부터" onClick={handleClick}>
          처음부터
        </Button>
      </div>
      <HandIcon value="" />
      <Dice color="red" num={2} />
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App;
