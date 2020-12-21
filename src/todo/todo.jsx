import React, {useState} from 'react';
import axios from 'axios';

const Todo = ({todo, todos, setTodos}) => {
    const [editMode, setEditMode] = useState(false);

    const update = (event) => {
   

    };

    const del = (todos) => {
        axios.delete('/todos/'+ todo.id)
        .then((response) => {
            setTodos(todos.filter((todoData) => {
                return todoData.id !== todo.id
                
            }))
        })
        .catch((error) => {
            console.log(error)

        })
    }
    
    const changeEditMode = () => {
        setEditMode(!editMode)
    }
    
    return (
    <div>


        Title : {todo.title}
        Content : {todo.content}
        <button onClick={update}>수정</button>
        <button onClick={() => {del(todos)}}>삭제</button>
    </div>
   
    )
}
export default Todo