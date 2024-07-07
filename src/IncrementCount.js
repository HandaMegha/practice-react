import withEnhancement from "./Count";

const IncrementCount = (props) => {
  const { name, count, handleClick } = props;
  return (
    <>
      <div>
        Count for {name} is: {count}
      </div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default withEnhancement(IncrementCount);
