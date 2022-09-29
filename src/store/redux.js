// import { Provider, useSelector, useDispatch } from "react-redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"

// POST project
const addOne = async (project) => {
    const responsive = await fetch('https://react-http-f4f9d-default-rtdb.firebaseio.com/portfolioprojects.json', {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
            'Contect-Type': 'application/json',
        }
    })
    const data = await responsive.json()
    console.log(data)
}
const projectsSlice = createSlice({
    name: 'projects',
    initialState: { projects: [], filtered: [] },
    reducers: {
        setProjects(state, action) {
            state.projects = action.payload
            state.filtered = state.projects.filter((project) => project.mainTool === 'own')
        },
        addProject(state, action) {
            action = action.payload
            addOne(action)

        },
        filterByTool(state, action) {
            const filteredProjects = state.projects.filter((project) => project.mainTool === action.payload)

            return { ...state, filtered: filteredProjects }
        }
    }
})

export const store = configureStore({
    reducer: { projects: projectsSlice.reducer }
})

const projectsActions = projectsSlice.actions

export default projectsActions