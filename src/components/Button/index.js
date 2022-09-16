import styled from "styled-components"

const Button = ({
    children,
    variant,
    borderRadius,
    fullWidth,
    fontSize,
    ...props
}) => {
    return (
        <MyButton
            variant={variant}
            borderRadius={borderRadius}
            fullWidth={fullWidth}
            {...props}
        >
            {children}
        </MyButton>
    )
}

const MyButton = styled.button`
    padding: 0.6em 1em;
    border-radius: ${(props) => props.borderRadius || "4px"};
    cursor: pointer;
    border: none;
    background-color: ${({ theme, variant }) => {
        if (variant === "outlined") {
            return "white"
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
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
    font-size: ${({ fontSize }) => fontSize || "1em"};
`

export default Button
