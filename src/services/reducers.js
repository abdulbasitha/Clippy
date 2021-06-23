import {combineReducers} from 'redux'
import articleReducer from './article/reducer'
import collectionReducer from './collection/reducer'
import toastReducer from './toast/reducer'

export default combineReducers({
    article:articleReducer,
    collection:collectionReducer,
    toast:toastReducer
})