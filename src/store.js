import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk]; // 비동기 action도 가능하게 도와줌

// store 생성 및 reducer와 연결(composeWithDevTools는 크롬 개발자 도구에서 디버깅 가능하게 도와줌))
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;