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
export const selectTransactionsByBankId = (bankId) =>
    createSelector(selectTransactions, (transactions) => transactions)

export const selectBanks = createSelector(selectDomain, (state) => state.banks)
export const selectBankById = (id) => {
    return createSelector(selectBanks, (banks) => {
        return banks.find((bank) => bank.id === id)
    })
}
