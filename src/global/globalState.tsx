import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dailyState: "" || null,
    toggle: false,
    toggleLeft: false
}

const globalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        user: (state, { payload }) => {
            state.dailyState = payload
        },

        logOut: (state) => {
            state.dailyState = null
        },

        onToggle: (state, { payload }) => {
            state.toggle = payload
        },

        onToggleLeft: (state, { payload }) => {
            state.toggleLeft = payload
        },
    }
});

export const { logOut, user, onToggle, onToggleLeft } = globalState.actions

export default globalState.reducer