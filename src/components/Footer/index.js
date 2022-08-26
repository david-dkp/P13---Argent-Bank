import { Stack, Typography } from "@mui/material"

const Footer = () => {
    return (
        <footer>
            <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    padding: "1em",
                    backgroundColor: "white",
                }}
            >
                <Typography variant="body1">
                    Copyright {new Date().getFullYear()} Argent Bank
                </Typography>
            </Stack>
        </footer>
    )
}

export default Footer
