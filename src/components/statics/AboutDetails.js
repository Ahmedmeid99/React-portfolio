import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
    faSquareGithub, faCodepen, faLinkedin, faWhatsappSquare, faTelegram
} from '@fortawesome/free-brands-svg-icons'
import classes from "./AboutDetails.module.css"
const AboutDetails = () => {

    const [textState, setTextState] = useState(false)
    const toggleTextHandler = () => setTextState(!textState)
    const chevronStyle = textState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////
    const [textState2, setTextState2] = useState(false)
    const toggleTextHandler2 = () => setTextState2(!textState2)
    const chevronStyle2 = textState2 ? `${classes.up}` : `${classes.down}`

    return (
        <div className="container mb">
            <div className="flex mb">
                <a className={ classes.link } href="https://www.linkedin.com/in/ahmed-mohamed-eid-267543225" target="_blank"><FontAwesomeIcon icon={ faLinkedin } className={ `${classes.icon} ${classes.linkedin}` } /></a>
                <a className={ classes.link } href="https://github.com/Ahmedmeid99" target="_blank"><FontAwesomeIcon icon={ faSquareGithub } className={ `${classes.icon} ${classes.linkedin}` } /></a>
                <a className={ classes.link } href="https://codepen.io/ahmedmeid99" target="_blank"><FontAwesomeIcon icon={ faCodepen } className={ `${classes.icon} ${classes.linkedin}` } /></a>
            </div>
            <div className={ classes.row }>
                <div className={ classes.edu }>
                    <div className={ classes.flex } onClick={ toggleTextHandler }>
                        <h3 className={ classes.title }>Udacity Nanodegree (FWD) <code>15/8/2021</code></h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${chevronStyle}` } />
                    </div>
                    { textState && <div className={ classes.text }>
                        <p className={ classes.description }>the nanodegree program,mini-educational diplomas added on the udacity website with the aim of focusing on the skills required for the jop market. The nanodegree course consists of several courses ending with a project presentation</p>
                        <p className={ classes.details }>the nanodegree program,mini-educational diplomas added on the udacity website with the aim of focusing on the skills required for the jop market. The nanodegree course consists of several courses ending with a project presentation</p>
                    </div>
                    }
                </div>
                <div className={ classes.edu }>
                    <div className={ classes.flex } onClick={ toggleTextHandler2 }>
                        <h3 className={ classes.title }>Kalbunyan almarsus (كالبنيان المرصوص) <code>2/4/2022</code></h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${chevronStyle2}` } />
                    </div>
                    { textState2 && <div className={ classes.text }>
                        <p className={ classes.description }>A non-profit organization that aims to urge young people to learn programming through developing a curriculum for learnning and distributing prizes for the top 5. The conditions for winning are challenges of each courses as well as implementing the projects included in each course</p>
                        <p className={ classes.details }>I have completed about 80% of the syllabus which are (MERN) stack courses from udemu as well as Programming Foundation courses from linkedin learnning</p>
                        <h3 className={ classes['list-title'] }>Courses Completed</h3>
                        <ul className={ classes.list }>
                            <li>Programming Foundation <code>Linkedin</code></li>
                            <li>Build Responsive Real-World Websites with HTML and CSS <code>Udemy</code></li>
                            <li>The Modern JavaScript Bootcamp <code>Udemy</code></li>
                            <li>React - The Complete Guide (incl Hooks, React Router,Redux) <code>Udemy</code></li>
                            <li>The Complete Node.js Developer Course(3rd Edition) <code>Udemy</code></li>
                        </ul>

                    </div>
                    }
                </div>
            </div>
        </div>
    )
};
export default AboutDetails