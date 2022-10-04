import classes from "./Projects.module.css"
import projectsActions from "../../redux/projectsSlice"
import { useDispatch } from 'react-redux'
import Cards from "./Cards"
import Model from "./Model"

const Projects = () => {
    const dispatch = useDispatch()
    const filterBy = (mainTool) => {
        mainTool = mainTool.trim().toLowerCase()
        dispatch(projectsActions.filterByTool(mainTool))
    }
    return (
        <div className="container section">
            <div className={ classes['projects-controller'] }>
                <div onClick={ () => filterBy('own') } className={ classes.option }>own</div>
                <div onClick={ () => filterBy('node') } className={ classes.option }>node</div>
                <div onClick={ () => filterBy('react') } className={ classes.option }>react</div>
                <div onClick={ () => filterBy('js') } className={ classes.option }>js</div>
                <div onClick={ () => filterBy('css') } className={ classes.option }>html / css</div>
            </div>
            {/* cards */ }
            <Cards />
            <Model />
        </div>
    )
}
export default Projects