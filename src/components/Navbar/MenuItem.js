import { Stack, Typography } from "@mui/material"
import { useTheme } from "styled-components"

const MenuItem = ({ iconElement, label, onClick, ...otherProps }) => {
    const theme = useTheme()

    return (
        <Stack
            direction="row"
            spacing={"0.3em"}
            onClick={onClick}
            sx={{ cursor: "pointer", color: theme.text.color }}
            {...otherProps}
        >
            {iconElement}
            <Typography variant="body1" fontWeight={"bold"}>
                {label}
            </Typography>
        </Stack>
    )
}

export default MenuItem
