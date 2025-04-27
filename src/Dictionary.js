import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [word, setWord] = useState(" ");
    let [meaning, setMeaning] = useState(" ")

    function showWord(event) {
        event.preventDefault();
    }

    function showMeaning(response) {
        setMeaning(response.data.meanings[0].definition);
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

    return(
        <div>
        <p>{form}</p>
        <p className="word">{word}</p>
        <p>{meaning}</p>
        </div>
    );
}