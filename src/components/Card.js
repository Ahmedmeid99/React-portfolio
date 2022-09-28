import classes from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
const Card = () => {
    return (
        <div className={ classes.card }>
            <div className={ classes['img-cover'] }><img src="" alt="" /></div>
            <div className={ classes['card-content'] }>
                <h3 className={ classes['card-title'] }>notes app</h3>
                <p className={ classes['card-description'] }>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href</p>
                <div className={ classes['btn-group'] }>
                    <button className={ classes['btn'] }><FontAwesomeIcon icon={ faCode } /></button>
                    <button className={ classes['btn'] }><FontAwesomeIcon icon={ faLink } /></button>
                </div>
            </div>
        </div>
    )
}
export default Card