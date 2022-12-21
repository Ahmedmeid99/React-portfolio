import classes from "./Tag.module.css"
const Tag = (props) => {
    const { tool } = props
    return <li className={ `${classes[tool]} ${classes.tag}` }>{ tool }</li>
}
export default Tag