import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProfile } from "reducers/userSlice"
import {
    selectIsLoggedIn,
    selectIsLoggingIn,
} from "reducers/userSlice/selectors"

const RequireAuth = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggingIn = useSelector(selectIsLoggingIn)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    useEffect(() => {
        if (!isLoggingIn && !isLoggedIn) {
            navigate("/signin")
        }
    }, [isLoggingIn, isLoggedIn, navigate])

    if (isLoggingIn) {
        return null
    }

    return children
}

export default RequireAuth
