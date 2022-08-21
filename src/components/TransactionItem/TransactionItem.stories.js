import TransactionItem from "."

export default {
    title: "components/TransactionItem",
    component: TransactionItem,
}

const conf = {
    date: new Date(),
    description: "Golden Sun Bakery",
    amount: 5,
    balance: 2082.79,
    type: "Electronic",
    category: "Food",
    categories: ["Food", "Groceries", "Restaurants"],
    notes: "I bought a cake for my friend's birthday",
    onCategoryEdit: () => {},
    onNotesEdit: () => {},
}

export const Default = () => <TransactionItem {...conf} />
