import { useState } from "react";

const CountZeros = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (number) {
      let num = number,
        result = 0;
      while (num > 0) {
        console.log("num", num % 10);
        if (num % 10 === 0) {
          result++;
        }
        num = parseInt(num / 10);
        console.log("numm", num);
      }
      setCount(result);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default CountZeros;
