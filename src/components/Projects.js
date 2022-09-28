import classes from "./Projects.module.css"
import Cards from "./Cards"
import Model from "./Model"

const Projects = () => {
    return (
        <div className="container section">
            <div className={ classes['projects-controller'] }>
                <div className={ classes.option }>own</div>
                <div className={ classes.option }>react</div>
                <div className={ classes.option }>node</div>
                <div className={ classes.option }>js</div>
                <div className={ classes.option }>html / css</div>
            </div>
            {/* cards */ }
            <Cards />
            <Model />
        </div>
    )
}
export default Projects