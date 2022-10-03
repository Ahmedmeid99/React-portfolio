import { useEffect, useState } from "react"

import Card from './Card'
import projectsActions from "../../redux/projectsSlice"
import { useSelector, useDispatch } from "react-redux"
import classes from "./Cards.module.css"

const Cards = (props) => {
    const dispatch = useDispatch()
    // const allProjects = useSelector((state) => state.projects.projects)
    // const projects = filteredProjects.length !== 0 ? filteredProjects : allProjects
    const projects = useSelector((state) => state.projects.filtered)

    useEffect(() => {
        fetchingData()
    }, [])
    // GET projects
    const fetchingData = async () => {
        try {
            const responsive = await fetch('https://react-http-f4f9d-default-rtdb.firebaseio.com/portfolioprojects.json')
            if (!responsive.ok) {
                throw new Error('something went wrong!')
            }
            const data = await responsive.json()
            const projectsArray = []
            for (const key in data) {
                projectsArray.push({
                    id: key,
                    imgLink: data[key].imgLink,
                    githubLink: data[key].githubLink,
                    liveLink: data[key].liveLink,
                    mainTool: data[key].mainTool,
                    tools: data[key].tools,
                    title: data[key].title,
                    description: data[key].description
                })
            }
            // return projectsArray
            dispatch(projectsActions.setProjects(projectsArray))

            console.log("projects", projects)
        } catch (e) {
            console.log('error =>')
        }
    }

    return (
        <div className={ classes.cards }>
            { projects.map((project) => <Card key={ project.id } project={ project } />) }
        </div>
    )
}
export default Cards