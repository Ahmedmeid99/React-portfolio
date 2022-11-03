import classes from "./Projects.module.css"
import projectsActions from "../../redux/projectsSlice"
import { useDispatch, useSelector } from 'react-redux'
import Cards from "./Cards"
import Model from "./Model"

const Projects = () => {
    const dispatch = useDispatch()
    let loading = useSelector((state) => state.projects.loading)
    const them = useSelector((state) => state.them.them)
    console.log(loading)
    const filterBy = (mainTool) => {
        mainTool = mainTool.trim().toLowerCase()
        dispatch(projectsActions.filterByTool(mainTool))
    }

    return (
        <div className={ `full pb ${them}` }>
            <div className={ `section container` }>
                <div className={ classes['projects-controller'] }>
                    <div onClick={ () => filterBy('own') } className={ classes.option }>own</div>
                    <div onClick={ () => filterBy('node') } className={ classes.option }>node</div>
                    <div onClick={ () => filterBy('react') } className={ classes.option }>react</div>
                    <div onClick={ () => filterBy('js') } className={ classes.option }>js</div>
                    <div onClick={ () => filterBy('css') } className={ classes.option }>css</div>
                    <div onClick={ () => filterBy('angular') } className={ classes.option }>angular</div>
                </div>
                <Cards />
                <Model />
            </div>
        </div >
    )
}
export default Projects