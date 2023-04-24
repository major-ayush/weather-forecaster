import React from "react";



function SearchBox(props)
{
    return (
        
            <input 
                type = "text"
                className = "input-box"
                name='indian-cities'
                placeholder="Enter your city"
                onChange={(event) => props.onInputChange(event)}
                value = {props.inputValue}
            /> 
       
    )
}

export default SearchBox;