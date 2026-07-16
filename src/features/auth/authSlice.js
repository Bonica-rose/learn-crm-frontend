import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.loading = false;
        },

        onLogout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        },
        
        authChecked(state) {
            state.loading = false;
        }
    }
});

export const {
    onLogout,
    setUser,
    authChecked
} = authSlice.actions;

export default authSlice.reducer;