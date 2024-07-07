import React, { useState } from "react";

const SearchExample = () => {
  const countries = ["India", "Asia", "Indonesia", "Amercia"];
  const [list, setList] = useState([])
  const [country, setCountry] = useState("");

  const filterCountriesBySubstring = (arr, substring) => {
    return arr.filter(country => country.toLowerCase().includes(substring.toLowerCase()));
  };

  const handleChange = (event) => {
    const val = event.target.value;
    const filteredCountries = filterCountriesBySubstring(countries, val);
    setList(filteredCountries);
    setCountry(event.target.value)
  }

  return (
    <div>
      <input type="text" value={country} onChange={handleChange}  />
      <ul>
        {list && list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default SearchExample;
