import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "theme"
import "../src/index.css"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    ),
    (Story) => (
        <BrowserRouter initialEntries={["/"]} initialIndex={0}>
            <Story />
        </BrowserRouter>
    ),
]
