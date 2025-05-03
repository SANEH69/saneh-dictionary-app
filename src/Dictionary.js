import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [word, setWord] = useState(props.word);
    let [output, setOutput] = useState(" ")
    let [ready, setReady] = useState(false)

    function showWord(event) {
        event.preventDefault();
    }

    function showMeaning(response) {
        setReady(true);
        setOutput(response.data);
    }
    
    function showPhoto(response) {
        console.log(response);
        setReady(true);
    }

    function search() {
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
    axios.get(apiUrl).then(showMeaning);
    

    let photoApiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${photoApiKey}`
    axios.get(photoApiUrl).then(showPhoto);
    }

    function searchWord(event) {
        setWord(event.target.value);
    }

    let form = (
        <form onSubmit={showWord}>
            <input type="search" onChange={searchWord}/>
            <input type="submit" value="Search" />
        </form>
    );

    if (output.ready) {
    return (
        <div>
             <p>{form}</p>
             <p className="word">{word}</p>
             <Meanings output={output} />
        </div>
    )
} else {
    search()
    return "Please wait..."
}
}