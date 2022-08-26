import { AccountCircle } from "@mui/icons-material"
import {
    Stack,
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
} from "@mui/material"
import Button from "components/Button"
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import TextField from "components/TextField"
import { useCallback, useState } from "react"
import { useTheme } from "styled-components"

const LoginPage = ({ login, loading }) => {
    const theme = useTheme()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    const handleSignIn = useCallback(() => {
        login(username, password, remember)
    }, [login, username, password, remember])

    return (
        <Stack sx={{ minHeight: "100vh" }}>
            <Navbar />
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: "#12002B",
                    padding: "2em",
                }}
            >
                <Stack
                    alignItems="center"
                    spacing={1}
                    sx={{ backgroundColor: "white", padding: "2em" }}
                >
                    <AccountCircle />
                    <Typography
                        variant="h6"
                        fontWeight={"bold"}
                        color={theme.text.color}
                    >
                        Sign In
                    </Typography>
                    <TextField
                        value={username}
                        onChange={setUsername}
                        label="Username"
                    />
                    <TextField
                        value={password}
                        onChange={setPassword}
                        label="Password"
                    />
                    <Stack direction="row" alignSelf={"start"}>
                        <FormControlLabel
                            label="Remember me"
                            control={
                                <Checkbox
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                />
                            }
                        />
                    </Stack>
                    <Button
                        style={{ textDecoration: "underline" }}
                        borderRadius={"0"}
                        fullWidth
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                </Stack>
            </Box>
            <Footer />
        </Stack>
    )
}

export default LoginPage
