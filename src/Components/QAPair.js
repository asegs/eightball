import React from "react";

export default function QAPair(props){
    return(
        <div>
        <p>{props.response['question']}</p>
        <p style={{'color':props.color}}>{props.response['answer']}</p>
            <hr/>
        </div>
    )
}
