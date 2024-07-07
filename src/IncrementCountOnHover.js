import withEnhancement from "./Count";

const IncrementCountOnHover = (props) => {
  const { name, count, handleClick } = props;

  return (
    <>
      <div>
        Count for {name} is: {count}
      </div>
      <button onMouseEnter={handleClick}>Increment</button>
    </>
  );
};

export default withEnhancement(IncrementCountOnHover);
