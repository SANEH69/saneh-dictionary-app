import React from "react";
import Definitions from "./Definitions";

export default function Meanings(props) {
    console.log(props.meaning);

    if (props.meaning) {
    return (
        <div className="Meaning">
            {props.meaning.meanings.map(function (meaning, index) {
                return (
                    <div key={meaning.id || index}>
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