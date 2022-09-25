export const getBankName = (bankType, bankId) => {
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
}
