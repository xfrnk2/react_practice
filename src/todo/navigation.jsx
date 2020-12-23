import TodoDetail from './tododetail';
import TodoList from './todolist';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <div>
            <BrowserRouter>
            <Link to={"/todolist"}>gd</Link>
            <Route path="/todolist" component={TodoList}></Route>
            <Route path="/tododetail/:todoinfo" component={TodoDetail}></Route>
            </BrowserRouter>
        </div>
    )
}
export default Navigation