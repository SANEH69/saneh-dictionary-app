import React from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";

export default function Meanings(props) {
    if (props.output && Array.isArray(props.output.meanings)) {
        return (
            <div>
                {Array.isArray(props.output.phonetics) && props.output.phonetics.map((phonetic, index) => (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                ))}
                <div className="Meaning">
                    {props.output.meanings.map((meaning, index) => (
                        <div key={index}>
                            <Definitions meaning={meaning} />
                        </div>
                    ))}
                </div>
            </div>
        );
    } 
    return null;
}