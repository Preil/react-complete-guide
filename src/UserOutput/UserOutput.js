import React from 'react'
import './UserOutput.css'

const userOutput = (props)=>{
    return (
        <div className="UserOutput">
            <p>Some random text, {props.userName} </p>
            <p>It will be overwritten</p>
        </div>
    )
};

export default userOutput;