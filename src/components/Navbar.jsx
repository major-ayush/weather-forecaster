import React from "react";
import SearchBox from "./searchBox";
import SubmitButton from "./submitButton";

function Navbar(props)
{
    return (
        
        <div className = "input-button">
           <SearchBox
                onInputChange = {props.onInputChange}
                inputValue = {props.inputValue}
            />
            <SubmitButton
                onButtonClick = {props.onButtonClick}
            />
        </div>
       
    )
}

export default Navbar;

 