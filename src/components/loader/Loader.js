import classes from "./Loader.module.css"
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