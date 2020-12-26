import {combineReducers} from 'redux';
import commonReducers from './commonReducers';

// commonReducers의 state값들이 commonState에 담김
export default combineReducers({
    common: commonReducers,
});