import { Stack, Typography } from "@mui/material"

const Footer = () => {
    return (
        <footer>
            <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    padding: "1.5em",
                    backgroundColor: "white",
                    borderTop: "1px solid #e6e6e6",
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
