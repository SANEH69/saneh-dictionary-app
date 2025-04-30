import React from "react";

export default function Meanings(props) {
    console.log(props.meaning);
    
    if (props.meaning) {
    return (
        <div className="Meanings">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <p>{meaning.definitions}</p>
                        <br />
                        <p><em>{meaning.example}</em></p>
                    </div>
                );
            })}
        </div>
    ) 
   } else {
        return (
            <p>Fetching data</p>
        );
   };
}