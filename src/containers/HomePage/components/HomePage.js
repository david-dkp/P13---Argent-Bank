import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "components/Navbar"
import { Box, Stack, Typography } from "@mui/material"
import bankTreeUrl from "assets/bank-tree.jpeg"
import { useTheme } from "styled-components"
import KeyValueItem from "./KeyValueItem"
import chatIconUrl from "assets/icon-chat.png"
import moneyIconUrl from "assets/icon-money.png"
import securityIconUrl from "assets/icon-security.png"

const HomePage = () => {
    const navigate = useNavigate()
    const theme = useTheme()

    const menuItems = useMemo(
        () => [
            {
                iconElement: <AccountCircleIcon />,
                label: "Sign In",
                onClick: navigate("/signin"),
            },
        ],
        [navigate]
    )

    return (
        <Stack>
            <Navbar items={menuItems} />
            <Box
                sx={{
                    backgroundImage: `url(${bankTreeUrl})`,
                    backgroundSize: "cover",
                    height: ["250px", "400px"],
                    padding: "2em",
                }}
            >
                <Stack
                    sx={{
                        backgroundColor: "white",
                        padding: "2em",
                    }}
                    spacing={2}
                >
                    <Typography
                        variant="body1"
                        fontWeight={"bold"}
                        color={theme.text.color}
                        lineHeight={1.2}
                    >
                        {"No fees.\nNo minimum deposit.\nHigh interest rates."}
                    </Typography>
                    <Typography
                        variant="body1"
                        color={theme.text.color}
                        lineHeight={1.2}
                    >
                        {"Open a savings account with Argent Bank today!"}
                    </Typography>
                </Stack>
            </Box>
            <Stack>
                <KeyValueItem
                    iconElement={<img src={chatIconUrl} alt="Chat" />}
                    title="You are our #1 priority"
                    subTitle="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
                />
                <KeyValueItem
                    iconElement={<img src={moneyIconUrl} alt="Money" />}
                    title="More savings means higher rates"
                    subTitle="The more you save with us, the higher your interest rate will be!"
                />
                <KeyValueItem
                    iconElement={<img src={securityIconUrl} alt="Security" />}
                    title="Security you can trust"
                    subTitle="We use top of the line encryption to make sure your data and money
                    is always safe."
                />
            </Stack>
        </Stack>
    )
}

export default HomePage
