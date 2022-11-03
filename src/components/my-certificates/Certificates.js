import classes from "./Projects.module.css"
import certificatesActions from "../../redux/certificatesSlice"
import { useDispatch, useSelector } from 'react-redux'
import Cards from "./Cards"
import Model from "./Model"

const Certificates = () => {
    const dispatch = useDispatch()
    const them = useSelector((state) => state.them.them)

    const filterBy = (type) => {
        type = type.trim().toLowerCase()
        dispatch(certificatesActions.filterBy(type))
    }
    return (
        <div className={ `full pb ${them}` }>
            <div className={ `section container` }>
                <div className={ classes['projects-controller'] }>
                    <div onClick={ () => filterBy('udemy') } className={ classes.option }>Udemy</div>
                    <div onClick={ () => filterBy('udacity') } className={ classes.option }>Udacity</div>
                    <div onClick={ () => filterBy('linkedin') } className={ classes.option }>Linkedin</div>
                    <div onClick={ () => filterBy('others') } className={ classes.option }>Others</div>
                </div>
                {/* cards */ }
                <Cards />
                <Model />
            </div>
        </div>
    )
}
export default Certificates