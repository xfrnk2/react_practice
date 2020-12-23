import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Todo from './todo';

const TodoList = ({}) => {
    let [todos, setTodos] = useState([]);
    let [currentStatus, setCurrentStatus] = useState('열일');
    let [writingMode, setWritingMode] = useState(false);
    let [form, setForm] = useState({
        title: "",
        content: ""
    });

    useEffect(() => {
        axios.get("/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const changeStatus = () => {
        if (currentStatus === '열일') {
            setCurrentStatus('휴식');
        } else {
            setCurrentStatus('열일');
        }
    }

    const changeWritingMode = () => {
        setWritingMode(!writingMode);
    }


    const create = (event) => {
        event.preventDefault();
        axios.post('/todos', form)
            .then((response) => {
                if(form.title && form.content){
                    setTodos([...todos, response.data]);
                } else {
                    console.log('제목과 내용이 모두 입력되지 않았습니다.')
                }
            changeWritingMode()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const changeForm = (data) => {
        setForm({
            ...form,
            [data.target.name]: data.target.value
        });
    }



    return (
        <Fragment>
            <div>


                <button onClick={changeStatus}>{currentStatus}</button>
                {currentStatus === '휴식' ?
                    null
                    :
                    <div>
                        <div>

                            {writingMode ?
                                <form onSubmit={(event) => { create(event) }}>
                                    <input type="text" name="title" placeholder="할일 제목" onChange={(e) => { changeForm(e) }}></input>
                                    <input type="text" name="content" placeholder="할일 내용" onChange={(e) => { changeForm(e) }}></input>
                                    <button type="submit">등록</button>
                                    <button onClick={changeWritingMode}>취소 </button>
                                </form>
                                :
                                <button onClick={changeWritingMode}>할일 생성</button>
                            }

                        </div>
                        <div>
                            {todos.map((todo) => {
                                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></Todo>
                                
                            })}
                        </div>
                    </div>


                }
            </div>
        </Fragment>
    )
}


export default TodoList;