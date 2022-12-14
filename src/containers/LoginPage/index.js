import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "reducers/userSlice"
import { selectError, selectIsLoggedIn } from "reducers/userSlice/selectors"
import LoginPageComponent from "./components/LoginPage"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isUserLoggedIn = useSelector(selectIsLoggedIn)
    const error = useSelector(selectError)

    useEffect(() => {
        if (isUserLoggedIn) {
            navigate("/profile")
        }
    }, [isUserLoggedIn, navigate])

    const handleLogin = useCallback(
        (username, password, remember) => {
            dispatch(login({ email: username, password, remember }))
        },
        [dispatch]
    )

    return <LoginPageComponent error={error} login={handleLogin} />
}

export default LoginPage
