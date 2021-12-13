import React, { useState } from "react";
import SearchResult from "./SearchResult";
import styles from "./Results.module.css";

const SearchResults = (props) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameSort("asc");
    props.onSubmit(query);
    setQuery("");
  };

  const [nameSort, setNameSort] = useState("asc");
  const handleSelect = (e) => {
    e.preventDefault();
    setNameSort(e.target.value);
  };
  const displayArray =
    nameSort === "asc" ? [...props.results] : [...props.results].reverse();

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <input
          style={{ width: "200px", margin: "2px" }}
          placeholder="keyword"
          onChange={handleChange}
          value={query}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div className={styles.results}>
        Results displayed for "{props.user}"
        <select
          id="dropdown"
          onChange={handleSelect}
          style={{ float: "right" }}
          name="nameSort"
          value={nameSort}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        {displayArray.map((result) => {
          return <SearchResult result={result} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
