import React from "react";
import Definitions from "./Definitions";

export default function Meanings(props) {

    if (props.output.meanings) {
    return (
        <div className="Meaning">
            <p>{props.output.phonetics}</p>
            {props.output.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <Definitions meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
} else {
    return null
}
}