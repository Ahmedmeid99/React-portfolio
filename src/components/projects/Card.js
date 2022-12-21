import classes from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
import Tag from "../../Ui/tag/Tag"
const Card = (props) => {
    console.log(props.project)
    const { imgLink, title, description, githubLink, liveLink, tools } = props.project
    const tecTools = tools?.trim().split(' ') // [ js ,cSs,HtMl]
    // tools [Js,Css,Html]
    return (
        <div className={ classes.card }>
            <div className={ classes['img-cover'] }><img src={ imgLink } alt="img...!" /></div>
            <div className={ classes['card-content'] }>
                <div className={ classes['card-header'] }>
                    <h3 className={ classes['card-title'] }>{ title }</h3>
                    <ul className={ classes.tag_list }>{ tecTools.map((tool) => <Tag tool={ tool.toLowerCase() } />) }</ul>
                </div>
                <p className={ classes['card-description'] }>{ description }</p>
                <div className={ classes['btn-group'] }>
                    <a href={ githubLink } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faCode } /></a>
                    <a href={ liveLink } className={ classes['btn'] } target="_blanck"><FontAwesomeIcon icon={ faLink } /></a>
                </div>
            </div>
        </div>
    )

}

export default Card