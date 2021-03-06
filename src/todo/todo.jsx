import React, {useState, Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Todo = ({todo, todos, setTodos}) => {

    
    

    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({
        title: todo.title,
        content: todo.content
    });

    const changeForm= (data) => {
        setForm({
            ...form, [data.target.name]: data.target.value
        })
    }

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
    
    const update = (event) => {
        
        axios.patch('/todos/' + todo.id, form)
        .then((response) => {
            setTodos(todos.map((todoData) => {
                if (todoData.id === todo.id) {
                    return response.data
                }
                return todoData
            }
            ))
            
            changeEditMode();
        })
        .catch((error) => {
            console.log(error)
        })
    }


    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    return (
  
    <div className="todo-box">
        {editMode?
           <form onSubmit={(event) => {update(event)}}>
            <input type="text" name="title" value={form.title} placeholder="할일 제목" onChange={(event) => changeForm(event)}></input>
            <input type="text" name="content" value={form.content} placeholder="할일 내용" onChange={(event) => changeForm(event)}></input>
            <div className="button-box">
            <br></br>
            <button type="submit">수정완료</button>
            <br></br>
            <button type="button" onClick={() => {changeEditMode()}}>취소</button>
            </div>
           </form>
        :
        <div>
        <Link to={{ pathname : `/tododetail/${todo.id}`,
                    state : {title : todo.title,
                             content : todo.content}
        }}>
        <div className="text-box">
        Title : {todo.title}
        Content : {todo.content}
        </div>
        </Link>
        <div className="button-box">
        <br></br>
        <button onClick={() => {changeEditMode()}}>수정</button>
        <br></br>
        <button onClick={() => {del(todos)}}>삭제</button>
        </div>
        </div>
        }
    </div>
    )
}
export default Todo