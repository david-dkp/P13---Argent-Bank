import { createSelector } from "@reduxjs/toolkit"
import { initialState } from "."

const selectDomain = (state) => state.transactionSlice || initialState

export const selectIsLoading = createSelector(
    selectDomain,
    (state) => state.isLoading
)

export const selectError = createSelector(selectDomain, (state) => state.error)

export const selectTransactions = createSelector(
    selectDomain,
    (state) => state.transactions
)

export const selectBanks = createSelector(selectDomain, (state) => state.banks)
