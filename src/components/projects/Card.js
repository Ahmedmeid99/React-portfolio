import classes from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    return (
        <div className={ classes.card }>
            <div className={ classes['img-cover'] }><img src={ props.project.imgLink } alt="img...!" /></div>
            <div className={ classes['card-content'] }>
                <h3 className={ classes['card-title'] }>{ props.project.title }</h3>
                <p className={ classes['card-description'] }>{ props.project.description }</p>
                <div className={ classes['btn-group'] }>
                    <a href={ props.project.githubLink } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faCode } /></a>
                    <a href={ props.project.liveLink } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faLink } /></a>
                </div>
            </div>
        </div>
    )

}
export default Card