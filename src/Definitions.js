import React from "react";

export default function Definitions(props) {
    console.log(props.meaning)
    return <h1>{props.meaning.partOfSpeech}</h1>;
}