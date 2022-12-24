import classes from './AboutHeader.module.css'
import { useSelector } from 'react-redux'
import cv from "../../assets/cv.pdf"
const AboutHeader = () => {
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)

    return (
        <div className={ classes.landing }>
            <div className={ `center section-title ${classes.about}` }>
                <h1 className={ classes['header-title'] }>About Me</h1>
                <a href={ cv } src={ cv } download title='cv' target='_blank' class={ classes["btn-cv"] }>Download CV</a>
            </div>
        </div >
    )
}
export default AboutHeader