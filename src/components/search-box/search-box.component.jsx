import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search-box"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
