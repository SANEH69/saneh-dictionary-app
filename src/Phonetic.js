import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} rel="noreferrer" target="_blank">Listen</a>
            {props.phonetic.text}
        </div>
    );
}