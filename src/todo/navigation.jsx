import TodoList from './todolist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TodoDetail from './tododetail';

const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
            <Link to={"/todolist"}>todolist</Link>
            <Route path="/todolist" component={TodoList}></Route>
            <Route path="/tododetail/:todoId" component={TodoDetail}></Route>
            </BrowserRouter>
        </div>
    )
}
export default Navigation