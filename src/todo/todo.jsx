import React from 'react';
import axios from'axios';

const Todo = (title, content) => {
    return (
    <div className='todo'>Title : {title}
        Content : {content}
    </div>
    )
}
export default Todo