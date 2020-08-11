import React from 'react'

const validationComponent = (props)=>{
    let message = null
    if(props.userInputLength<=3){
        message = 'Input is too short'
    } else if (props.userInputLength>=10){
        message = 'Input is too long'
    } else {
        message = null
    }
    return (
        <p>{message}</p>
    )
};

export default validationComponent;