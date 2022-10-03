import { configureStore } from "@reduxjs/toolkit"

import { projectsSlice } from "./projectsSlice"
import { usersSlice } from "./usersSlice"
const store = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
        users: usersSlice.reducer,
    }
})
export default store