import { useState } from "react";

const withEnhancement = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount((prevState) => prevState + 1);
    };

    return (
      <WrappedComponent {...props} count={count} handleClick={handleClick} />
    );
  };
};

export default withEnhancement;
