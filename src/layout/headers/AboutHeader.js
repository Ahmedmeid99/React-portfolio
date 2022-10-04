import classes from './AboutHeader.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const AboutHeader = () => {
    const [openAlert, setOpenAlert] = useState(true)
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)

    const closeAlertHandler = () => setOpenAlert(false)
    return (
        <div className={ classes.landing }>

            <div className="center">
            </div>
        </div>
    )
}
export default AboutHeader