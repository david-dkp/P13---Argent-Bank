import { selectError, selectIsLoggedIn } from "reducers/userSlice/selectors"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { login } from "reducers/userSlice"

function App() {
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(selectIsLoggedIn)
    const error = useSelector(selectError)
    console.log(isUserLoggedIn)
    console.log(error)
    useEffect(() => {
        dispatch(
            login({
                email: "no",
                password: "no",
            })
        )
    }, [])
    return <div className="App"></div>
}

export default App
