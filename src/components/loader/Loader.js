import classes from "./Loader.module.css"
import React from "react"
const Loader = () => {
    return (
        <p className={ classes.loading }>
            <div class={ classes.spinner }>
                <div class={ classes['bubble-1'] }></div>
                <div class={ classes['bubble-2'] }></div>
            </div>
        </p>
    )
}
export default Loader