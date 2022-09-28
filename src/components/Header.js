import classes from './Header.module.css'
const Header = () => {
    return (
        <header className={ classes.header }>
            <div className={ `${classes.flex} container` }>
                <div className={ classes.logo }>logo</div>
                <nav className={ classes.nav }>
                    <ul className={ classes.list }>
                        <li className={ classes['list-item'] }><a href="#">Home</a></li>
                        <li className={ classes['list-item'] }><a href="#">About</a></li>
                        <li className={ classes['list-item'] }><a href="#">projects</a></li>
                        <li className={ classes['list-item'] }><a href="#">contactus</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header