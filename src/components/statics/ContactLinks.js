import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSquareGithub, faCodepen, faLinkedin, faWhatsappSquare, faTelegram
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope, faSquarePhone
} from '@fortawesome/free-solid-svg-icons'
import classes from "./ContactLinks.module.css"
import { useSelector } from 'react-redux';
const ContactLinks = () => {
    const them = useSelector((state) => state.them.them)

    return (
        <div className={ `full pb ${them}` }>
            <div className="container pb">
                <div className={ classes.contact }>
                    <div className={ classes['flex-row'] }>
                        <div className={ classes.col }>
                            <FontAwesomeIcon icon={ faLinkedin } className={ `${classes.icon} ${classes.linkedin}` } />
                            <a className={ classes.link } href="https://www.linkedin.com/in/ahmed-mohamed-eid-267543225" target="_blank">Ahmed Mohamed Eid</a>
                        </div>
                        <div className={ classes.col }>
                            <FontAwesomeIcon icon={ faEnvelope } className={ `${classes.icon} ${classes.gmail}` } />
                            <div className={ classes.link }>ahmedalbakrycool@gmail.com</div>
                        </div>
                        <div className={ classes.col }>
                            <FontAwesomeIcon icon={ faSquarePhone } className={ `${classes.icon} ${classes.phone}` } />
                            <div className={ classes.link } >01095814411</div>
                        </div>
                    </div>
                    <div className={ classes.image }></div>
                </div>
            </div>
        </div>
    )
};
export default ContactLinks