import configs from "configs"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const NAMESPACE = "user"

const userUrl = configs.apiBaseUrl + "/user"

export const login = createAsyncThunk(
    NAMESPACE + "/login",
    async ({ email, password }) => {
        const response = await fetch(userUrl + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json()
        return data
    }
)

export const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
}

const userSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.isLoggedIn = false
            localStorage.removeItem("token")
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token)
                state.isLoggedIn = true
                state.isLoading = false
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = false
            })
    },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
