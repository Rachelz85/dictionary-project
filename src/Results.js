import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";


export default function Results(props) {
    if(props.results) {
        return ( 
        <div className="Results">
            <section>
            <h2 className="wordSearched">{props.results.word}</h2>
            {props.results.phonetics
            .filter((phonetic) => {
              return phonetic.audio;
            })
            .map((phonetic, index) => {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}