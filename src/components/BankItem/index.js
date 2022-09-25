import Button from "components/Button"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useMemo } from "react"
import BankInfo from "components/BankInfo"
import { getBankName } from "utils/bankUtils"

const BankItem = ({ bankId, bankBalance, bankType }) => {
    const bankName = useMemo(() => {
        return getBankName(bankType, bankId)
    }, [bankType, bankId])

    return (
        <Container>
            <BankInfo
                bankName={bankName}
                bankBalance={bankBalance}
                bankType={bankType}
            />
            <Link to={`/bank/${bankId}`} className="btn-transaction">
                <Button fullWidth>View transactions</Button>
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

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1em;
        align-items: flex-start;

        .btn-transaction {
            width: 100%;
        }
    }
`
