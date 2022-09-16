import { useMemo } from "react"
import styled from "styled-components"

const BankInfo = ({ bankName, bankBalance, bankType, ...props }) => {
    const availabilityText = useMemo(() => {
        if (bankType === "bankChecking" || bankType === "bankSavings") {
            return "Available Balance"
        }
        return "Current Balance"
    }, [bankType])

    return (
        <Container {...props}>
            <p className="bank-name">{bankName}</p>
            <h2 className="bank-balance">{bankBalance}</h2>
            <p className="bank-availability">{availabilityText}</p>
        </Container>
    )
}

export default BankInfo

const Container = styled.div`
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
