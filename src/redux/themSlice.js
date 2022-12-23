import { createSlice } from "@reduxjs/toolkit"

export const themSlice = createSlice({
    name: 'them',
    initialState: { them: 'light' },
    reducers: {
        toggleThem(state, action) {
            if (state.them === "light") {
                state.them = "dark"
            } else {
                state.them = "light"
            }
        }
    }
})

const themActions = themSlice.actions

export default themActions