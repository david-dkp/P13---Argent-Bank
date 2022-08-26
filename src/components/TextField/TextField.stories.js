import TextField from "."

export default {
    title: "components/TextField",
    component: TextField,
}

export const Default = () => (
    <TextField label="Email" placeholder={"Tony"} onChange={() => {}} />
)

export const TypePassword = () => (
    <TextField
        label="Password"
        type="password"
        placeholder={"Tony"}
        value="mypassword"
        onChange={() => {}}
    />
)
