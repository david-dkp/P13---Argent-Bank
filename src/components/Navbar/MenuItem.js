import { Stack, Typography } from "@mui/material"

const MenuItem = ({ iconElement, label, onClick, ...otherProps }) => {
    return (
        <Stack
            direction="row"
            spacing={"0.3em"}
            onClick={onClick}
            sx={{ cursor: "pointer" }}
            {...otherProps}
        >
            {iconElement}
            <Typography variant="body1">{label}</Typography>
        </Stack>
    )
}

export default MenuItem
