import Button from "components/Button"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useMemo } from "react"
import BankInfo from "components/BankInfo"

const BankItem = ({ bankId, bankName, bankBalance, bankType }) => {
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
