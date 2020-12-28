import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'react-devtools-extension';
import thunk from 'thunk';
import rootReducer from './todo/reducer/rootReducer';

const InitialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store;