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
   
    function search(event) {
        event.preventDefault();
        
       // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
       <div className="Dictionary">
           <form className="mb-3" onSubmit={search}>
               <input type="search" autoFocus={true} placeholder="Enter a word" onChange={handleKeywordChange}/>
           </form>
           <Results results={results} />
       </div>
   ); 
}
