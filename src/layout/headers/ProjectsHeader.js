import classes from './ProjectsHeader.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faNode,
    faReact,
    faJs,
    faCss3,
    faHtml5,
} from '@fortawesome/free-brands-svg-icons'

const ProjectsHeader = () => {
    const [openAlert, setOpenAlert] = useState(true)
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)

    const closeAlertHandler = () => setOpenAlert(false)
    return (
        <div className={ classes.landing }>

            <div className="center">
                <h1 className={ classes['header-title'] }>Projects & Certificates</h1>
            </div>
            <div className='flex position-bottom'>
                <FontAwesomeIcon icon={ faNode } className={ `${classes.icon} ${classes['node-icon']}` } />
                <FontAwesomeIcon icon={ faReact } className={ `${classes.icon} ${classes['react-icon']}` } />
                <FontAwesomeIcon icon={ faJs } className={ `${classes.icon} ${classes['js-icon']}` } />
                <FontAwesomeIcon icon={ faCss3 } className={ `${classes.icon} ${classes['css-icon']}` } />
                <FontAwesomeIcon icon={ faHtml5 } className={ `${classes.icon} ${classes['html-icon']}` } />
            </div>
        </div>
    )
}
export default ProjectsHeader