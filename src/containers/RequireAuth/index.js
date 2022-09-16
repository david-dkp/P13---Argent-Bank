import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getProfile } from "reducers/userSlice"
import { selectIsLoggedIn, selectIsLoading } from "reducers/userSlice/selectors"

const RequireAuth = ({ children }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isUserLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    useEffect(() => {
        if (!isUserLoading && !isLoggedIn) {
            navigate("/signin")
        }
    }, [isUserLoading, isLoggedIn, navigate])

    return children
}

export default RequireAuth
