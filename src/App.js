import { Outlet, Route, Routes } from "react-router-dom"
import HomePage from "containers/HomePage"
import LoginPage from "containers/LoginPage"
import ProfilePage from "containers/ProfilePage"
import RequireAuth from "containers/RequireAuth"
import BankPage from "containers/BankPage"

function App() {
    return (
        <Routes>
            <Route path="/signin" exact element={<LoginPage />} />
            <Route
                path="/profile"
                exact
                element={
                    <RequireAuth>
                        <ProfilePage />
                    </RequireAuth>
                }
            />
            <Route path="/" exact element={<HomePage />} />
            <Route
                path="/bank/:bankId"
                exact
                element={
                    <RequireAuth>
                        <BankPage />
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

export default App
