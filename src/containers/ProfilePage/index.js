import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "reducers/userSlice"
import { selectUser } from "reducers/userSlice/selectors"

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <div>
            <h1>ProfilePage</h1>
        </div>
    )
}
export default ProfilePage
