import LoginPage from "./components/LoginPage"

export default {
    title: "containers/LoginPage",
    component: LoginPage,
}

const conf = {
    login: (username, password, shouldRemember) =>
        alert("Login: " + username + " " + password + " " + shouldRemember),
    loading: false,
}

export const Default = () => <LoginPage {...conf} />
