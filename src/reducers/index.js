import { combineReducers } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import transactionSlice from "./transactionSlice"

export default combineReducers({
    userSlice,
    transactionSlice,
})
