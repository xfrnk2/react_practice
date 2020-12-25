import axios from 'axios';

const TodoDetail = ({match, location}) => {
    console.log('소환했다.')


    return (
        <div>
            Title : {location.state.title}}
            <br></br>
            Content : {location.state.content}}
        </div>
    )
}
export default TodoDetail