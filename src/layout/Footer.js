import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import classes from "./Footer.module.css"
import { useSelector } from "react-redux"
const Footer = () => {
    const them = useSelector((state) => state.them.them)

    return (
        <div className={ `${classes.footer} ${them === 'dark' ? classes['dark-footer'] : ''}` }>
            <h3 className={ classes.title }>portfolio website</h3>
            <div className={ `${classes.icons} ${classes.flex}` }>
                <a href="https://www.linkedin.com/in/ahmed-mohamed-eid-267543225" target="_blank"><FontAwesomeIcon className={ `${classes.icon} ${classes.linkedin}` } icon={ faLinkedin } /></a>
                <a href="https://github.com/Ahmedmeid99" target="_blank"><FontAwesomeIcon className={ `${classes.icon} ${classes.github}` } icon={ faSquareGithub } /></a>
                <a href="https://codepen.io/ahmedmeid99" target="_blank"><FontAwesomeIcon className={ `${classes.icon} ${classes.codepen}` } icon={ faCodepen } /></a>
            </div>
            <div className={ `${classes.pages} ${classes.flex}` }>
                <Link end to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/projects">projects</Link>
                <Link to="/contactus">contactus</Link>
            </div>
            <div className={ `${classes.links} ${classes.flex}` }>
                <div className={ classes.linktitle }>old portfolio</div>
                <a className={ classes.link } target='_blank' href="https://portfolio-js-pearl.vercel.app">https://portfolio-js-pearl.vercel.app</a>
            </div>
            <div className={ `${classes.copyright} ${them === 'dark' ? classes['dark-copyright'] : ''}` }>
                <h3 className={ `${classes.name}` }>Created by Ahmed Mohamed Eid</h3>
            </div>
        </div>
    )
}
export default Footer