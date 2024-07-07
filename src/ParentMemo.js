import { useMemo, useState } from "react";

function factorialOf(n) {
  console.log("factotal of called");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const ParentMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  //   const factorial = factorialOf(number);
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(event.target.value);
  };

  const handleClick = () => {
    setInc(inc + 1);
  };

  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
      Increment is {inc} <br />
      Factorial is {factorial} <br />
      <button onClick={handleClick}>Re-render</button>
    </div>
  );
};

export default ParentMemo;

// useCallback and useMemo are both React Hooks that help optimize the performance of a React application by memoizing values.
// They both accept a function as an argument and return a memoized version of the function.

// useMemo is a hook that returns a memoized value. It takes two arguments: a function that returns a value and a dependency
// array. It will call the function and return its result only if one of the dependencies has changed.
