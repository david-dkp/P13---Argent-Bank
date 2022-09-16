import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "containers/HomePage"
import LoginPage from "containers/LoginPage"
import ProfilePage from "containers/ProfilePage"
import RequireAuth from "containers/RequireAuth"

function App() {
    return (
        <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route
                path="/profile"
                element={
                    <RequireAuth>
                        <ProfilePage />
                    </RequireAuth>
                }
            />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default App
