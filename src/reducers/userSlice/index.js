import configs from "configs"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const NAMESPACE = "user"

const userUrl = configs.apiBaseUrl + "/user"

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
            state.isLoading = false
            localStorage.removeItem("token")
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.body.token)
                state.isLoggedIn = true
                state.isLoading = false
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = false
            })
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.user = action.payload.body
                state.isLoading = false
                if (action.payload.body) {
                    state.isLoggedIn = true
                }
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = false
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload.body
                state.isLoading = false
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.payload.message
                state.isLoading = false
            })
    },
})

export const { logout } = userSlice.actions

export default userSlice.reducer

export const login = createAsyncThunk(
    NAMESPACE + "/login",
    async ({ email, password, remember }) => {
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
        localStorage.setItem("remember", remember)
        const data = await response.json()
        return data
    }
)

export const getProfile = createAsyncThunk(userUrl + "/profile", async () => {
    const response = await fetch(userUrl + "/profile", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
    const data = await response.json()
    return data
})

export const updateProfile = createAsyncThunk(
    userUrl + "/profile/update",
    async ({ firstName, lastName }) => {
        const response = await fetch(userUrl + "/profile", {
            method: "PUT",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
            }),
        })
        const data = await response.json()
        return data
    }
)
