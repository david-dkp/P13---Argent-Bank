import { AccountBox, Login } from "@mui/icons-material"
import Navbar from "."

export default {
    title: "components/Navbar",
    component: Navbar,
}

const items = [
    {
        iconElement: <AccountBox />,
        label: "Account",
        onClick: () => alert("Account"),
    },
    {
        iconElement: <Login />,
        label: "Login",
        onClick: () => alert("Login"),
    },
]

export const Default = () => <Navbar items={items} />
