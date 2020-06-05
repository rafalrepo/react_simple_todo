import React from 'react';
import '../App.css';

function ListItem(props) {
    
    return(
        <li className={`list__item ${props.item.completed ? 'list__item--completed' : ''}`}>
            <span className="list__title">{props.item.title}</span>
            <span className="list__buttons">
                <button className={`btn btn--list ${props.item.completed ? 'btn--warning' : 'btn--success'}`} onClick={() => props.taskCompleted(props.item.id)}>
                    <i className={`fas ${props.item.completed ? 'fa-undo-alt' : 'fa-check-circle'}`}></i>
                </button>
                <button className="btn btn--danger btn--list" onClick={() => props.taskDeleted(props.item.id)}><i className="fas fa-trash-alt"></i></button>
            </span>
        </li>
    )
}

export default ListItem;