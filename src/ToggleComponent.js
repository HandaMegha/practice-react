import useToogle from "./useToogle";

const ToggleComponent = () => {
  const [value, toogleValue] = useToogle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toogleValue}>Toogle</button>
    </div>
  );
};

export default ToggleComponent;
