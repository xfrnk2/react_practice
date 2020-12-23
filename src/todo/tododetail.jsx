import axios from 'axios';
import {useEffect, useState} from 'react';

const TodoDetail = ({match}) => {
    const [out, setOut] = useState('') 


    useEffect( () => {
        axios.get('/todos/'+match.params.todoinfo)
        .then((response) => {
            setOut(response.data);
        })
        .catch((error) => {
            console.log(error)
        })

    }, []);
    
    return (
        <div>
            Title : {out.title}
            Content : {out.content}
        </div>    
    )

}
export default TodoDetail