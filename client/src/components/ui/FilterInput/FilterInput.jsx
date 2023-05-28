import React from "react";

import "./styles.css";

const FilterInput = ({
  placeholder,
  label,
  type,
  searchResult,
  setSearchResults,
}) => {
  const handleSearchChange = (e) => {
    setSearchResults(e.target.value);
  };

  return (
    <div className="form__group">
      <input
        onChange={handleSearchChange}
        type={type}
        className="form__field"
        placeholder={placeholder}
        value={searchResult}
      />
      <label className="form__label">{label}</label>
    </div>
  );
};

export default FilterInput;
