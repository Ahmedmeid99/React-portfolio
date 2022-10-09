import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
    faSquareGithub, faCodepen, faLinkedin, faWhatsappSquare, faTelegram
} from '@fortawesome/free-brands-svg-icons'
import classes from "./AboutDetails.module.css"
const skills = {
    react: ['React-basics', "React-Router", "Hooks", "Redux toolkit", "state & setstate", "Lifecycle methods", "vaildation", "conditional content", "Css modules", "styled component", "..."],
    node: ['Node.js-basic', "Express & Routes", "Moongodb & CRUD", "Modules", "Jwt", "File system", "Authentication", "File uploads", "Pagination", "Web socket", "..."],
    js: ['Js-basic', "DOM", "BOM", "OOP", "Debugging", "dev tools", "Render Function", "Promis", "Async & Await", "APIs & CRUD", "Try Catch", "..."],
    css: ['Css-basic', "Selectors", "Pseudo classes", "Pseudo elements", "Position", "Display", "Flex", "Grid", "Box model", "Responsive design", "Animation", "..."],
    html: ['Html-basic', "Id & Class", "Block & inline elements", "Semantic html", "Header-tags", "html attributes", "Templats", "Tabel", "Form", "..."],
}
const AboutDetails = () => {
    const [reactTextState, setReactTextState] = useState(false)
    const toggleReactTextHandler = () => setReactTextState(!reactTextState)
    const reactChevronStyle = reactTextState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////
    const [nodeTextState, setNodeTextState] = useState(false)
    const toggleNodeTextHandler = () => setNodeTextState(!nodeTextState)
    const nodeChevronStyle = nodeTextState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////
    const [jsTextState, setJsTextState] = useState(false)
    const toggleJsTextHandler = () => setJsTextState(!jsTextState)
    const jsChevronStyle = jsTextState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////
    const [cssTextState, setCssTextState] = useState(false)
    const toggleCssTextHandler = () => setCssTextState(!cssTextState)
    const cssChevronStyle = cssTextState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////
    const [htmlTextState, setHtmlTextState] = useState(false)
    const toggleHtmlTextHandler = () => setHtmlTextState(!htmlTextState)
    const htmlChevronStyle = htmlTextState ? `${classes.up}` : `${classes.down}`
    /////////////////////////////////////////////////////////////////////

    return (
        <div className="container mb">
            <div className="flex mb">
                <a className={ classes.link } href="https://www.linkedin.com/in/ahmed-mohamed-eid-267543225" target="_blank"><FontAwesomeIcon icon={ faLinkedin } className={ `${classes.icon} ${classes.linkedin}` } /></a>
                <a className={ classes.link } href="https://github.com/Ahmedmeid99" target="_blank"><FontAwesomeIcon icon={ faSquareGithub } className={ `${classes.icon} ${classes.linkedin}` } /></a>
                <a className={ classes.link } href="https://codepen.io/ahmedmeid99" target="_blank"><FontAwesomeIcon icon={ faCodepen } className={ `${classes.icon} ${classes.linkedin}` } /></a>
            </div>
            <div className={ classes.row }>
                <div className={ classes.edu }>
                    <div className={ classes.maintitle }>
                        <h3 className={ classes.title }>Udacity Nanodegree (FWD) <code>15/8/2021</code></h3>
                    </div>
                    <div className={ classes.text }>
                        <p className={ classes.description }>the nanodegree program,mini-educational diplomas added on the udacity website with the aim of focusing on the skills required for the jop market. The nanodegree course consists of several courses ending with a project presentation</p>
                        <p className={ classes.details }>the nanodegree program,mini-educational diplomas added on the udacity website with the aim of focusing on the skills required for the jop market. The nanodegree course consists of several courses ending with a project presentation</p>
                    </div>
                </div>
                <div className={ classes.edu }>
                    <div className={ classes.maintitle }>
                        <h3 className={ classes.title }>Kalbunyan almarsus (كالبنيان المرصوص) <code>2/4/2022</code></h3>
                    </div>
                    <div className={ classes.text }>
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

                </div>
            </div>
            <div className={ classes.skillsrow }>
                <div className={ classes.skilledu }>
                    <div className={ classes.flex } onClick={ toggleReactTextHandler }>
                        <h3 className={ classes.skilltitle }>React </h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${reactChevronStyle}` } />
                    </div>
                    { reactTextState && <div className={ classes.text }>
                        <p className={ classes.description }>what do you know in react?</p>
                        <div className={ classes.tecs }>{ skills.react.map((tec) => <span key={ tec } className={ classes.tec }>{ tec }</span>) }</div>
                    </div>
                    }
                </div>
                <div className={ classes.skilledu }>
                    <div className={ classes.flex } onClick={ toggleNodeTextHandler }>
                        <h3 className={ classes.skilltitle }>Node </h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${nodeChevronStyle}` } />
                    </div>
                    { nodeTextState && <div className={ classes.text }>
                        <p className={ classes.description }>what do you know in node?</p>
                        <div className={ classes.tecs }>{ skills.node.map((tec) => <span key={ tec } className={ classes.tec }>{ tec }</span>) }</div>                    </div>
                    }
                </div>
                <div className={ classes.skilledu }>
                    <div className={ classes.flex } onClick={ toggleJsTextHandler }>
                        <h3 className={ classes.skilltitle }>Js </h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${jsChevronStyle}` } />
                    </div>
                    { jsTextState && <div className={ classes.text }>
                        <p className={ classes.description }>what do you know in js?</p>
                        <div className={ classes.tecs }>{ skills.js.map((tec) => <span key={ tec } className={ classes.tec }>{ tec }</span>) }</div>
                    </div>
                    }
                </div>
                <div className={ classes.skilledu }>
                    <div className={ classes.flex } onClick={ toggleCssTextHandler }>
                        <h3 className={ classes.skilltitle }>Css </h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${cssChevronStyle}` } />
                    </div>
                    { cssTextState && <div className={ classes.text }>
                        <p className={ classes.description }>what do you know in css?</p>
                        <div className={ classes.tecs }>{ skills.css.map((tec) => <span key={ tec } className={ classes.tec }>{ tec }</span>) }</div>
                    </div>
                    }
                </div>
                <div className={ classes.skilledu }>
                    <div className={ classes.flex } onClick={ toggleHtmlTextHandler }>
                        <h3 className={ classes.skilltitle }>Html </h3>
                        <FontAwesomeIcon icon={ faChevronDown } className={ `${classes.chevron} ${htmlChevronStyle}` } />
                    </div>
                    { htmlTextState && <div className={ classes.text }>
                        <p className={ classes.description }>what do you know in html?</p>
                        <div className={ classes.tecs }>{ skills.html.map((tec) => <span key={ tec } className={ classes.tec }>{ tec }</span>) }</div>
                    </div>
                    }
                </div>

            </div>
        </div>
    )
};
export default AboutDetails