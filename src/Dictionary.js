import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState(" ");
    let [output, setOutput] = useState(" ")

    function showWord(event) {
        event.preventDefault();
    }

    function showMeaning(response) {
        setOutput(response.data);
    }
    
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`

    axios.get(apiUrl).then(showMeaning);

    function searchWord(event) {
        setWord(event.target.value);
    }

    let form = (
        <form onSubmit={showWord}>
            <input type="search" onChange={searchWord}/>
            <input type="submit" value="Search" />
        </form>
    );

    return (
        <div>
             <p>{form}</p>
             <p className="word">{word}</p>
             {output.phonetics.map(function (phonetic, index) {
                return (
                <div key={index}>
                    <Phonetic phonetic={phonetic} />
                </div>
                );
             })}
             <Meanings output={output} />
        </div>
    );
}