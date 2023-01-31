import React from "react";
import '../components/TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon icon-check ${props.compleyed && 'Icon-check--active'}`}>c</span>
            <p>{props.text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    )
}

export { TodoItem }