import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name: 'users',
    initialState: { userType: '', isLogedin: false },
    reducers: {
        setAsAdmin(state) {
            state.userType = 'admin'
            state.isLogedin = true
            localStorage.setItem('login', "admin")
        },
        setAsUser(state) {
            state.userType = 'user'
            state.isLogedin = true
            localStorage.setItem('login', "user")
        },
        reset() {
            return { userType: '', isLogedin: false }
        }
    }
})

const usersActions = usersSlice.actions

export default usersActions