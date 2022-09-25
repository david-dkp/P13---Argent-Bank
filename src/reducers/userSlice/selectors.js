import { createSelector } from "@reduxjs/toolkit"
import { initialState } from "."

const selectDomain = (state) => state.userSlice || initialState

export const selectUser = createSelector(selectDomain, (state) => state.user)

export const selectIsLoggedIn = createSelector(
    selectDomain,
    (state) => state.isLoggedIn
)

export const selectIsLoading = createSelector(
    selectDomain,
    (state) => state.isLoading
)

export const selectIsLoggingIn = createSelector(
    selectIsLoading,
    selectIsLoggedIn,
    (isLoading, isLoggedIn) => isLoading && !isLoggedIn
)

export const selectError = createSelector(selectDomain, (state) => state.error)
