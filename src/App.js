import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

// Arrays with complex changes in state
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  // solution with bugs!
  // const handleLeftClick = () => {
  //   setAll(allClicks.concat("L"));
  //   console.log("left before: ", left);
  //   setLeft(left + 1);
  //   console.log("left after: ", left);
  //   setTotal(left + right);
  // };

  //better solution!
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  // here's a reset button so I don't
  // have to refresh my work everytime

  const handleReset = () => {
    setAll([]);
    setLeft(0);
    setRight(0);
    setTotal(0);
  };
  return (
    <div>
      <button onClick={handleLeftClick}>{left} left</button>{" "}
      <button onClick={handleRightClick}>{right} right</button>{" "}
      <button onClick={handleReset}>reset</button>
      <p>Click Tracker: {allClicks.join(" ")}</p> <p>Total: {total}</p>
    </div>
  );
};
export default App;

// Try to make a reset button for this exercise too!
