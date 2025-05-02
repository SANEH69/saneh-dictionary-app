import React from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";

export default function Meanings(props) {

    if (props.output.meanings) {
    return (
        <div>
              {props.output.phonetics.map(function (phonetic, index) {
                            return (
                            <div key={index}>
                                <Phonetic phonetic={phonetic} />
                            </div>
                            );
                         })}
        <div className="Meaning">
            {props.output.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <Definitions meaning={meaning} />
                    </div>
                );
            })}
        </div>
        </div>
    );
} else {
    return null
}
}