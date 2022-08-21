import Button from "components/Button"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useMemo } from "react"

const BankItem = ({ bankId, bankName, bankBalance, bankType }) => {
    const availabilityText = useMemo(() => {
        if (bankType === "checking") {
            return "Available Balance"
        }
        return "Current Balance"
    }, [bankType])

    return (
        <Container>
            <BankInfo>
                <p className="bank-name">{bankName}</p>
                <h2 className="bank-balance">{bankBalance}</h2>
                <p className="bank-availability">{availabilityText}</p>
            </BankInfo>
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

const BankInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: #333;

    .bank-name {
        font-size: 0.9em;
    }

    .bank-balance {
        font-size: 1.6em;
    }

    .bank-availability {
        font-size: 0.7em;
    }
`
