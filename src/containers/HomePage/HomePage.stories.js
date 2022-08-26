import HomePage from "./components/HomePage"

export default {
    title: "containers/HomePage",
    component: HomePage,
    parameters: {
        layout: "fullscreen",
    },
}

export const Default = () => <HomePage />
