import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p className="count">
        <strong>{count}</strong>
      </p>
      <div className="buttonContainer">
        <button className="button" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className="button"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -
        </button>
      </div>
    </div>
  );
};
