import React, {useEffect, useState} from 'react';
import axios from'axios';

const TodoList = () => {
    let [todos, setTodos] = useState({})


    useEffect(() => {

        axios.get("/todolist")
            .then((response) => {
                
                console.log(todos)
                setTodos(response.data);
                console.log(todos)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // useEffect(() => {
    //         axios.get("/todolist")
    //         .then((response) => {
    //             console.log(response);
    //             setTodos(response.data);
    //             console.log('todos 출력테스트');
    //             console.log(todos)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         }
    //         )
    // }, [])

    /*useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.
 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방합니다.*/


    return  (
        <div className="todolist">TodoList
        </div>

    )

};

export default TodoList;