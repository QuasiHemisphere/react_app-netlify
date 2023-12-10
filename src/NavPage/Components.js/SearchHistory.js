import React, { useState } from "react";

const SearchHistory = ({ searchHistory, setSearchHistory }) => {
  return (
    <form action onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        type="search"
        placeholder="Search item"
        value={searchHistory}
        onChange={(e) => setSearchHistory(e.target.value)}
      />
      <i className="fa-regular fa-search form-search-icon"></i>
    </form>
  );
};

export default SearchHistory;
