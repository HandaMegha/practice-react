import { useCallback, useState } from "react";

const ParentCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} count={count} />;
};

export default ParentCallback;

const ChildComponent = ({ onClick, count }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// useCallback is a hook that returns a memoized callback. A callback is a function that is passed as an argument to another
// function. In the context of React, a callback is often used as an event handler or to pass data between components.
// The useCallback hook takes two arguments: a function and a dependency array. It will return a memoized version of the function
// that only changes if one of the dependencies has changed.

// In this example, the handleClick function is passed as an event handler to the button element. The useCallback hook ensures
// that the handleClick function is only re-created if the count prop changes. This can be useful if the ParentComponent is
// re-rendered frequently, as it can help to prevent the function from being unnecessarily re-created.
