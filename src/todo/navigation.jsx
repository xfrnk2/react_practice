import TodoList from './todolist';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
            <Link to={"/todolist"}>todolist</Link>
            <Route path="/todolist" component={TodoList}></Route>
            </BrowserRouter>
        </div>
    )
}
export default Navigation