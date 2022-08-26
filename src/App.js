import { Routes, Route } from "react-router-dom"
import HomePage from "containers/HomePage"
import LoginPage from "containers/LoginPage"
import ProfilePage from "containers/ProfilePage"

function App() {
    return (
        <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default App
