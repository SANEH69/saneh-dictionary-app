import React from "react";

export default function Definitions(props) {
    
    if (props.meaning) {
        return (
            <div className="Definitions">
                <h3>{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <br />
                        <p><em>{definition.example}</em></p>
                    </div>
                );
            })}
            </div>
        );
    } else {
        return (
            <p>Fetching data...</p>
        );
    }
}