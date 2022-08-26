import { Box, Container, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import logoUrl from "assets/argentBankLogo.png"
import MenuItem from "./MenuItem"

const Navbar = ({ items }) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5em",
                backgroundColor: "white",
            }}
        >
            <Link to={"/"}>
                <Box
                    sx={{ height: "50px" }}
                    component={"img"}
                    src={logoUrl}
                    alt="Argent Bank"
                />
            </Link>

            <Stack direction="row" spacing={2}>
                {items.map(({ iconElement, label, onClick }) => (
                    <MenuItem
                        key={label}
                        iconElement={iconElement}
                        label={label}
                        onClick={onClick}
                    />
                ))}
            </Stack>
        </Container>
    )
}

export default Navbar
