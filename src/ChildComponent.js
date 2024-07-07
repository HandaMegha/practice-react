import { useContext } from "react";
import { Context } from "./Context";

const ChildComponent = () => {
  const { text, setText } = useContext(Context);

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={() => setText("Hello World")}>Show Text</button>
    </div>
  );
};

export default ChildComponent;
