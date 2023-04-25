import React from "react";

export const FilterInput = ({ placeholder, filterInput, onHandleChange }) => (
  <input
    type="search"
    placeholder={placeholder}
    value={filterInput}
    onChange={(e) => onHandleChange(e)}
  />
);
