import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
const initialState ={}
const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist:['sd']
  }

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer,initialState,composeWithDevTools(
    applyMiddleware(...middleware),
    )
)

export default store;
