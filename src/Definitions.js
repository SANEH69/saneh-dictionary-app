import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
    if (props.meaning) {
        return (
            <div className="Meanings">
                <h3>{props.meaning.partOfSpeech}</h3>
                {Array.isArray(props.meaning.definitions) && props.meaning.definitions.map((definition, index) => (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <br />
                        <p><em>{definition.example}</em></p>
                        <Synonyms synonyms={definition.synonyms} />
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