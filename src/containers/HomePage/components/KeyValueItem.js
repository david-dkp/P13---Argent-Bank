import { Stack, Box, Typography } from "@mui/material"
import { useTheme } from "styled-components"

const KeyValueItem = ({ iconElement, title, subTitle }) => {
    const theme = useTheme()

    return (
        <Stack
            alignItems={"center"}
            sx={{
                padding: "2em",
                textAlign: "center",
            }}
            spacing={1.5}
        >
            <Box
                sx={{
                    padding: "0.7em",
                    border: `${theme.colors.primary} 8px solid`,
                    borderRadius: "999px",
                    height: "120px",
                    width: "120px",
                    "& > *": {
                        height: "100%",
                        width: "100%",
                    },
                }}
            >
                {iconElement}
            </Box>
            <Typography variant="h6" fontWeight={"bold"}>
                {title}
            </Typography>
            <Typography variant="body1">{subTitle}</Typography>
        </Stack>
    )
}

export default KeyValueItem
