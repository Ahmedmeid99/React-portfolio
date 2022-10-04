import { useState } from "react"
import classes from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const [openImg, setOpenImg] = useState(false)
    const openHandler = () => setOpenImg(true)
    const closeHandler = () => setOpenImg(false)
    return (
        <div className={ classes.card }>
            { openImg && <div onClick={ closeHandler } className='form-bg'></div> }
            { openImg && <div className={ classes['img-focus-cover'] }><img src={ props.certificate.imgLink } alt="img...!" /><FontAwesomeIcon onClick={ closeHandler } className={ classes['close-btn'] } icon={ faXmark } /></div> }
            <div className={ classes['img-cover'] }><img src={ props.certificate.imgLink } alt="img...!" /></div>
            <div className={ classes['card-content'] }>
                <div className={ classes['btn-group'] }>
                    <div onClick={ openHandler } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faEye } /></div>
                    <a href={ props.certificate.liveLink } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faLink } /></a>
                </div>
            </div>
        </div>
    )

}
export default Card