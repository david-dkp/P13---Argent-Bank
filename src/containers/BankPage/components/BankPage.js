import {
    Box,
    CircularProgress,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"
import BankInfo from "components/BankInfo"
import Footer from "components/Footer"
import TransactionItem from "components/TransactionItem"
import AppBar from "containers/AppBar"
import { getBankName } from "utils/bankUtils"
import { formatNumberWithComas } from "utils/numberUtils"

const BankPage = ({ bank, transactions = [], onCategoryEdit, onNotesEdit }) => {
    return (
        <Stack direction="column" minHeight={"100vh"}>
            <AppBar />
            <Stack
                alignItems="center"
                sx={{
                    padding: 3,
                    width: "100%",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "#D7DEE4",
                }}
            >
                {bank ? (
                    <Box
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <BankInfo
                            bankName={getBankName(bank.type, bank.id)}
                            bankBalance={`${
                                bank.balance.currency
                            }${formatNumberWithComas(bank.balance.value)}`}
                            bankId={bank.id}
                            bankType={bank.type}
                        />
                    </Box>
                ) : (
                    <CircularProgress />
                )}
            </Stack>
            <TableContainer
                sx={{
                    backgroundColor: "#D7DEE4",
                    padding: 5,
                    paddingTop: 15,
                    flex: 1,
                }}
            >
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">DATE</TableCell>
                            <TableCell align="center">DESCRIPTION</TableCell>
                            <TableCell align="center">AMOUNT</TableCell>
                            <TableCell align="center">BALANCE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TransactionItem
                                amount={transaction.amount.value}
                                balance={transaction.balanceStamp.value}
                                date={new Date(transaction.date)}
                                description={transaction.description}
                                notes={transaction.customData.notes}
                                category={transaction.customData.category}
                                type={transaction.type}
                                key={transaction.id}
                                categories={["Food", "Transportation"]}
                                onCategoryEdit={(category) =>
                                    onCategoryEdit(transaction.id, category)
                                }
                                onNotesEdit={(notes) =>
                                    onNotesEdit(transaction.id, notes)
                                }
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </Stack>
    )
}

export default BankPage
