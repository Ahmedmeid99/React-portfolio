import classes from "./Tag.module.css"
import React from "react"
const Tag = (props) => {
    const { tool } = props
    return <li className={ `${classes[tool]} ${classes.tag}` }>{ tool }</li>
}
export default Tag