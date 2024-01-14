import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>SearchPage</h1>
      <SearchBar setResults={setResults} />
      <ResultsList results={results} />
    </div>
  );
};

export default SearchPage;
