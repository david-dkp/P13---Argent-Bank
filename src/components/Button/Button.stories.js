import Button from "."

export default {
    title: "components/Button",
    component: Button,
}

export const Default = () => <Button>Default</Button>

export const VariantOutlined = () => (
    <Button variant="outlined">Outlined</Button>
)
