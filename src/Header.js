import React from "react";
import Search from "./Search";

const Header = ({ title, setSearchQuery }) => {
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h1">{title}</h1>
        <Search setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;
