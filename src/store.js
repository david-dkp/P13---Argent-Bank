import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "reducers"

export const configureAppStore = (initialState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })

    return store
}
