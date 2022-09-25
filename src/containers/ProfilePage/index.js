import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProfile, updateProfile } from "reducers/userSlice"
import { selectIsLoading, selectUser } from "reducers/userSlice/selectors"
import { CircularProgress, Container, Grid, Stack } from "@mui/material"
import TextField from "components/TextField"
import Button from "components/Button"
import { selectBanks } from "reducers/transactionSlice/selectors"
import { getBanks } from "reducers/transactionSlice"
import BankItem from "components/BankItem"
import { formatNumberWithComas } from "utils/numberUtils"
import Footer from "components/Footer"
import AppBar from "containers/AppBar"

const ProfilePage = () => {
    const dispatch = useDispatch()

    const user = useSelector(selectUser)
    const banks = useSelector(selectBanks)
    const isLoadingUser = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(getProfile())
        dispatch(getBanks())
    }, [dispatch])

    const [userUiState, setUserUiState] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
    })

    const onSaveUser = useCallback(() => {
        dispatch(updateProfile(userUiState))
    }, [dispatch, userUiState])

    const onCancel = useCallback(() => {
        setUserUiState({
            firstName: user.firstName,
            lastName: user.lastName,
        })
    }, [user])

    useEffect(
        () =>
            setUserUiState({
                firstName: user?.firstName || "",
                lastName: user?.lastName || "",
            }),
        [user]
    )

    return (
        <Stack direction="column" sx={{ minHeight: "100vh" }}>
            <AppBar />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    padding: "2em",
                    alignItems: "center",
                    backgroundColor: "#D7DEE4",
                }}
            >
                <h2>Welcome back</h2>
                <Stack gap={2} direction={"row"}>
                    <TextField
                        placeholder={"Tony"}
                        onChange={(text) => {
                            setUserUiState({ ...userUiState, firstName: text })
                        }}
                        value={userUiState.firstName}
                    />
                    <TextField
                        placeholder={"Jarvis"}
                        onChange={(text) => {
                            setUserUiState({ ...userUiState, lastName: text })
                        }}
                        value={userUiState.lastName}
                    />
                </Stack>
                {isLoadingUser ? (
                    <CircularProgress />
                ) : (
                    <Grid
                        sx={{ fontSize: 13 }}
                        maxWidth={250}
                        container
                        spacing={2.4}
                    >
                        <Grid item xs={6}>
                            <Button
                                variant={"outlined"}
                                fullWidth
                                onClick={onSaveUser}
                            >
                                Save
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant={"outlined"}
                                fullWidth
                                onClick={onCancel}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Container>
            <Container
                sx={{
                    backgroundColor: "#D7DEE4",
                    flex: 1,
                    paddingBlock: "2em",
                }}
            >
                <Stack direction="column" gap={3}>
                    {banks.map((bank) => (
                        <BankItem
                            key={bank.id}
                            bankBalance={`${
                                bank.balance.currency
                            }${formatNumberWithComas(bank.balance.value)}`}
                            bankId={bank.id}
                            bankType={bank.type}
                        />
                    ))}
                </Stack>
            </Container>
            <Footer />
        </Stack>
    )
}
export default ProfilePage
