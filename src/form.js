import { useState } from "react";

const Form = () => {
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, gender } = event.target.elements;
    const arr = [
      {
        name: firstname.value,
        gender: gender.value,
      },
    ];
    setList([...list, ...arr]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Your Name:</label>
      <input type="text" name="firstname" />
      <br />
      <label>Select Your Gender:</label>
      <label>Male</label>
      <input type="radio" name="gender" value="male" />
      <label>Female</label>
      <input type="radio" name="gender" value="female" />
      <br />
      <button>Submit</button>
      <br />
      {list &&
        list.map((item, index) => {
          return (
            <li key={index}>
              {item.name} is {item.gender}
            </li>
          );
        })}
    </form>
  );
};

export default Form;
