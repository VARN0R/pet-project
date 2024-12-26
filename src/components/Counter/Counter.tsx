import { useState } from "react";

import classes from "./Counter.module.scss";
import "../../styles/index.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>Counter: {counter}</div>
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </>
  );
};
