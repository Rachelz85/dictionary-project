import React, {useState } from "react";
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) { 
        setResults(response.data[0]); 
    }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }
   
    function handleSearch(event) {
        event.preventDefault();
        
       // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  
  let pexelsApiKey = "563492ad6f9170000100000117a831f4145345af9cfc93322d6259c7";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;  
  let headers = {Authorization : `Bearer ${pexelsApiKey}`}
  axios.get(pexelsApiUrl, { headers: headers, }).then(handlePexelsResponse);
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
        <Photos photos={photos}/>
       </div>
   ); 
}
