import { useState } from "react";

const useToogle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toogleValue = (val) => {
    setValue((currentValue) =>
      typeof val === "boolean" ? val : !currentValue
    );
  };

  return [value, toogleValue];
};

export default useToogle;
