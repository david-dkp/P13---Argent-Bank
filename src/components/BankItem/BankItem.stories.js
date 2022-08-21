import BankItem from "."

export default {
    title: "components/BankItem",
    component: BankItem,
}

const conf = {
    bankId: "1",
    bankName: "Argent Bank Checking (x8349)",
    bankBalance: "$2,082.79",
    bankType: "checking",
}

export const Default = () => <BankItem {...conf} />
