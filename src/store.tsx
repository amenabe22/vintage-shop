import { createStore } from 'redux'
import {themeReducer} from './reducers'


export default createStore(themeReducer);