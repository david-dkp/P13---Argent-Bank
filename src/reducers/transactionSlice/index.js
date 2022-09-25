import { createSlice } from "@reduxjs/toolkit"
import { banks, transactions } from "./fakeData"

export const NAMESPACE = "transaction"

export const initialState = {
    banks: [],
    transactions: [],
    isLoading: false,
    error: null,
}

const transactionSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        getBanks: (state) => {
            state.banks = banks
        },
        getTransactions: (state) => {
            state.transactions = transactions
        },
        getTransactionsByBankId: (state) => {
            state.transactions = transactions
        },
        getBankById: (state, action) => {
            const bank = banks.find((bank) => bank.id === action.payload)
            state.banks.push(bank)
        },
    },
})

export const {
    getTransactionsByBankId,
    getBanks,
    getTransactions,
    getBankById,
} = transactionSlice.actions

export default transactionSlice.reducer
