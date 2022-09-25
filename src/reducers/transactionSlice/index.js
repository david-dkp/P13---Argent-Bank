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
            if (state.transactions.length > 0) {
                return
            }
            state.transactions = transactions
        },
        getTransactionsByBankId: (state) => {
            if (state.transactions.length > 0) {
                return
            }
            state.transactions = transactions
        },
        getBankById: (state, action) => {
            const fakeBank = banks.find((bank) => bank.id === action.payload)
            const bank = state.banks.find((bank) => bank.id === action.payload)

            if (!bank) {
                state.banks.push(fakeBank)
            }

            return state
        },
        updateTransaction: (state, action) => {
            const { id, notes, category } = action.payload
            const transaction = state.transactions.find(
                (transaction) => transaction.id === id
            )
            transaction.customData.notes = notes
            transaction.customData.category = category
        },
    },
})

export const {
    getTransactionsByBankId,
    getBanks,
    getTransactions,
    getBankById,
    updateTransaction,
} = transactionSlice.actions

export default transactionSlice.reducer
