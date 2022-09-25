import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBankById, getTransactionsByBankId } from "reducers/transactionSlice"
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

    return <BankPageComponent bank={bank} transactions={transactions} />
}

export default BankPage
