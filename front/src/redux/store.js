import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import characterReducer from "./characters/characters.reducer";

const rootReducer = combineReducers({
    characters: characterReducer,
})

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;