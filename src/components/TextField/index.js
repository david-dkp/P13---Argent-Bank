import styled from "styled-components"

const MyInput = styled.input`
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    width: 100%;

    &::placeholder {
        color: #ccc;
    }
`

const TextField = ({ placeholder, value, onChange, ...props }) => {
    return (
        <MyInput
            placeholder={placeholder}
            value={value}
            onChange={({ target: { value } }) => onChange(value)}
        />
    )
}

export default TextField
