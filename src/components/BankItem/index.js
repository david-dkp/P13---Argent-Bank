import Button from "components/Button"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useMemo } from "react"
import BankInfo from "components/BankInfo"

const BankItem = ({ bankId, bankBalance, bankType }) => {
    const bankName = useMemo(() => {
        if (bankType === "bankChecking") {
            return "Argent Bank Checking " + "x" + bankId
        }
        if (bankType === "bankSavings") {
            return "Argent Bank Savings " + "x" + bankId
        }
        if (bankType === "creditCard") {
            return "Argent Bank Credit Card " + "x" + bankId
        }
        return "Unknown"
    }, [bankType, bankId])

    return (
        <Container>
            <BankInfo
                bankName={bankName}
                bankBalance={bankBalance}
                bankType={bankType}
            />
            <Link to={`/bank/${bankId}`}>
                <Button>View transactions</Button>
            </Link>
        </Container>
    )
}

export default BankItem

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    border: 2px solid #ccc;
    background-color: white;
`
