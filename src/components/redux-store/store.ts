import { createStore} from 'redux';
import themeReducer from '../reducers/themeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(themeReducer, composeWithDevTools());

export default store;
