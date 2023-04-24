import React from "react";

function SubmitButton(props)
{
    return <button onClick={() => props.onButtonClick()}>Search</button>
}

export default SubmitButton;