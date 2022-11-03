import { configureStore } from "@reduxjs/toolkit"

import { projectsSlice } from "./projectsSlice"
import { usersSlice } from "./usersSlice"
import { certificatesSlice } from "./certificatesSlice"
import { themSlice } from "./themSlice"
const store = configureStore({
    reducer: {
        projects: projectsSlice.reducer,
        users: usersSlice.reducer,
        certificates: certificatesSlice.reducer,
        them: themSlice.reducer,
    }
})
export default store