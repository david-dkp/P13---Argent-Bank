import { createSelector } from "@reduxjs/toolkit"
import { initialState, NAMESPACE } from "."

const selectDomain = (state) => state[NAMESPACE] || initialState

export const selectUser = createSelector(selectDomain, (state) => state.user)

export const selectIsLoggedIn = createSelector(
    selectDomain,
    (state) => state.isLoggedIn
)

export const selectIsLoading = createSelector(
    selectDomain,
    (state) => state.isLoading
)

export const selectError = createSelector(selectDomain, (state) => state.error)
