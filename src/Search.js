import React, { useState } from "react";

const Search = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
