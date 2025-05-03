import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    const [word, setWord] = useState(" ");
    const [output, setOutput] = useState(" ");

    function showMeaning(response) {
        console.log(response);
        setOutput(response.data.meanings.definition)
    }

    function updateWord(event) {
        event.preventDefault();
        setWord(event.target.value);
    }

    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(showMeaning);

    let form = (
        <form>
            <input type="search" placeholder="Type a word" onChange={updateWord}/>
        </form>
    )
    return (
        <div>
        <p>{form}</p>
        <p>{word}</p>
        <p>{output}</p>
        </div>
    );
}