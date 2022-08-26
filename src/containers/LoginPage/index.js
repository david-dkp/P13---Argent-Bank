import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "reducers/userSlice"
import { selectIsLoggedIn } from "reducers/userSlice/selectors"
import LoginPageComponent from "./components/LoginPage"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isUserLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        if (isUserLoggedIn) {
            navigate("/")
        }
    }, [isUserLoggedIn, navigate])

    const handleLogin = useCallback(
        (username, password) => {
            dispatch(login(username, password))
        },
        [dispatch]
    )

    return <LoginPageComponent login={handleLogin} />
}

export default LoginPage
