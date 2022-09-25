import { useMemo } from "react"
import { AccountCircle, Logout } from "@mui/icons-material"
import AppBarComponent from "./components/AppBar"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "reducers/userSlice"
import { selectUser } from "reducers/userSlice/selectors"

const AppBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(selectUser)

    const items = useMemo(
        () => [
            {
                iconElement: <AccountCircle />,
                label: user && user.firstName,
                onClick: () => navigate("/profile"),
            },
            {
                iconElement: <Logout />,
                label: "Sign out",
                onClick: () => {
                    dispatch(logout())
                },
            },
        ],
        [dispatch, navigate, user]
    )

    return <AppBarComponent items={items} />
}

export default AppBar
