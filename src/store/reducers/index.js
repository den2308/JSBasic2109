import { combineReducers } from 'redux';
import reducers from './reducers';

const appReducers = combineReducers({
    globalStore: reducers
})

export default appReducers


