import React from 'react';
import '../App.css';


function Message(props){
    return(
        <div className={`alert alert--${props.message.alert} ${!props.message.show ? "hidden" : ''}`}>{props.message.tekst}</div>
    )
}

export default Message;



