import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ goSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  console.log(inputSearch);

  return (
    <div className="searchbar">
      <div className="orangeEllipse"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Empécher la page de se recharger (comportement natif sur on submit)
          goSearch(inputSearch);
        }}
      >
        <input
          value={inputSearch}
          type="text"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
        />
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
};
export default SearchBar;