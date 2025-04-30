import React from "react";

export default function Meanings(props) {
    
    if (props.meaning) {
        return (
            <div className="Meanings">
                <h3>{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map((definition, index) => (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <br />
                        <p><em>{definition.example}</em></p>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <p>Fetching data...</p>
        );
    }
}