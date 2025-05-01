import React from "react";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h5>{props.meaning.partOfSpeech}</h5>
                {props.meaning.definitions.map(function (definition, index) {
                    return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <br />
                        <p><em>{definition.example}</em></p>
                        <Synonyms synonyms={definition.synonyms} />
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