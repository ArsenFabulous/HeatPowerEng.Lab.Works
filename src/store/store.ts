import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LWReducer from './reducers/LWSlice';


const rootReducer = combineReducers({
    LWReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']