import React from "react";
import Search from "./Search";

const Header = ({ title, setSearchQuery }) => {
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="h3">{title}</h3>
        <Search setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;
