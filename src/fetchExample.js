const { useEffect, useState } = require("react");

const FetchExample = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    //https://dummy.restapiexample.com/api/v1/employees
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  console.log("list", list);

  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FetchExample;
