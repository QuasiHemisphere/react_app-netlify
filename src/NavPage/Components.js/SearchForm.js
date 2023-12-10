import React from "react";

const SearchForm = ({ searchItem, setSearchItem }) => {
  return (
    <form action onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="search"
        placeholder="Search item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <i className="fa-regular fa-search form-search-icon"></i>
    </form>
  );
};

export default SearchForm;
