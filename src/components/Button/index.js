import styled from "styled-components"

const Button = ({ children, variant, ...props }) => {
    return (
        <MyButton variant={variant} {...props}>
            {children}
        </MyButton>
    )
}

const MyButton = styled.button`
    padding: 0.6em 1em;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    background-color: ${({ theme, variant }) => {
        if (variant === "outlined") {
            return "transparent"
        }

        return theme.colors.primary
    }};
    color: ${({ theme, variant }) => {
        if (variant === "outlined") {
            return theme.colors.primary
        }

        return "white"
    }};
    border: ${({ theme, variant }) => {
        if (variant === "outlined") {
            return `2px solid ${theme.colors.primary}`
        }

        return "none"
    }};
`

export default Button
