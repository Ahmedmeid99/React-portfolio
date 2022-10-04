import classes from './HomeHeader.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faJs, faReact, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
    const [openAlert, setOpenAlert] = useState(true)
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)

    const closeAlertHandler = () => setOpenAlert(false)
    return (
        <div className={ classes.landing }>
            { isLogedin && userType === 'admin' && openAlert &&
                <div className='alert bg-green'>
                    <div className='success-alert container'>
                        <div className={ classes.welcome }><FontAwesomeIcon className={ `${classes['right-mark']}` } icon={ faCircleCheck } /><h3>Welcom Ahmed</h3></div>
                        <FontAwesomeIcon onClick={ closeAlertHandler } className={ ` ${classes['close-alert']}` } icon={ faXmark } />
                    </div>
                </div>
            }
            {/* <FontAwesomeIcon icon={ faNode } className={ `${classes.icon} ${classes['node-icon']}` } />
            <FontAwesomeIcon icon={ faReact } className={ `${classes.icon} ${classes['react-icon']}` } />
            <FontAwesomeIcon icon={ faJs } className={ `${classes.icon} ${classes['js-icon']}` } />
            <FontAwesomeIcon icon={ faCss3 } className={ `${classes.icon} ${classes['css-icon']}` } />
            <FontAwesomeIcon icon={ faHtml5 } className={ `${classes.icon} ${classes['html-icon']}` } /> */}
            <div className="center">
                <h1 className={ classes['header-title'] }>full stack developer <code className={ classes.mern }>(mern)</code></h1>
                <p className={ classes['header-subtitle'] }>Hi my name is ahmed mohamed eid ,I am a MERN stack developer , I started learnning programming 12 months ago, I am constantly striving to increase my skills in creating web apps and learnning new technologies</p>
            </div>
        </div>
    )
}
export default Landing