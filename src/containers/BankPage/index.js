import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
    getBankById,
    getTransactionsByBankId,
    updateTransaction,
} from "reducers/transactionSlice"
import {
    selectBankById,
    selectTransactionsByBankId,
} from "reducers/transactionSlice/selectors"
import BankPageComponent from "./components/BankPage"

const BankPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const bank = useSelector(selectBankById(params.bankId))
    const transactions = useSelector(selectTransactionsByBankId(params.bankId))

    useEffect(() => {
        dispatch(getBankById(params.bankId))
        dispatch(getTransactionsByBankId(params.bankId))
    }, [])

    const onCategoryEdit = useCallback(
        (transactionId, category) => {
            const transaction = transactions.find(
                (transaction) => transaction.id === transactionId
            )
            if (transaction) {
                dispatch(
                    updateTransaction({
                        id: transactionId,
                        category,
                        notes: transaction.customData.notes,
                    })
                )
            }
        },
        [dispatch, transactions]
    )

    const onNotesEdit = useCallback(
        (transactionId, notes) => {
            const transaction = transactions.find(
                (transaction) => transaction.id === transactionId
            )
            if (transaction) {
                dispatch(
                    updateTransaction({
                        id: transactionId,
                        category: transaction.customData.category,
                        notes,
                    })
                )
            }
        },
        [dispatch, transactions]
    )

    return (
        <BankPageComponent
            onNotesEdit={onNotesEdit}
            onCategoryEdit={onCategoryEdit}
            bank={bank}
            transactions={transactions}
        />
    )
}

export default BankPage
