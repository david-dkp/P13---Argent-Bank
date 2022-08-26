import styled, { useTheme } from "styled-components"
import { Stack, Typography } from "@mui/material"

const MyInput = styled.input`
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 0.6em;
    width: 100%;

    &::placeholder {
        color: #ccc;
    }
`

const TextField = ({ label, placeholder, value, onChange, type, ...props }) => {
    const theme = useTheme()

    return (
        <Stack>
            {label && (
                <Typography
                    variant="body1"
                    fontWeight="bold"
                    color={theme.text.color}
                >
                    {label}
                </Typography>
            )}
            <MyInput
                placeholder={placeholder}
                value={value}
                onChange={({ target: { value } }) => onChange(value)}
                type={type}
            />
        </Stack>
    )
}

export default TextField
