import React, {useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);

    function handleResponse(response) { 
        setResults(response.data[0]); 
    }
   
    function handleSearch(event) {
        event.preventDefault();
        
       // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
    
    function keywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
        <section>
          <form onSubmit={handleSearch}>
            <span className="searchBar">
              <input
                type="search"
                onChange={keywordChange}
                placeholder="Search for a word  "
              ></input>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleSearch}
              >
                🔍
              </button>
            </span>
          </form>
        </section>
        <Results results={results} />
       </div>
   ); 
}
