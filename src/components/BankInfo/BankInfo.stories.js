import BankInfo from "."

export default {
    title: "components/BankInfo",
    component: BankInfo,
}

const conf = {
    bankName: "Argent Bank Checking (x8349)",
    bankBalance: "$2,082.79",
    bankType: "checking",
}

export const Default = () => <BankInfo {...conf} />
