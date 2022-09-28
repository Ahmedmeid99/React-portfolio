import classes from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faJs, faReact, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'

const Landing = () => {
    return (
        <div className={ classes.landing }>

            <FontAwesomeIcon icon={ faNode } className={ `${classes.icon} ${classes['node-icon']}` } />
            <FontAwesomeIcon icon={ faReact } className={ `${classes.icon} ${classes['react-icon']}` } />
            <FontAwesomeIcon icon={ faJs } className={ `${classes.icon} ${classes['js-icon']}` } />
            <FontAwesomeIcon icon={ faCss3 } className={ `${classes.icon} ${classes['css-icon']}` } />
            <FontAwesomeIcon icon={ faHtml5 } className={ `${classes.icon} ${classes['html-icon']}` } />
            <div className="center">
                <h1 className={ classes['header-title'] }>full stack developer <code className={ classes.mern }>(mern)</code></h1>
                <p className={ classes['header-subtitle'] }> The href attribute requires a valid value to be accessible. Provide a valid,
                    navigable address as the href value. If you cannot provide a valid href, but still need the
                    element to resemble a </p>
            </div>
        </div>
    )
}
export default Landing