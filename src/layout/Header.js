import { useState, useRef } from 'react'
import usersActions from "../redux/usersSlice"
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import classes from './Header.module.css'
const Header = () => {
    /////////////////////////////////////////////////
    // Toggle menue
    /////////////////////////////////////////////////
    const [menuOpen, setMenuOpen] = useState(false)
    const navStyle = menuOpen ? '50%' : '155%'
    const openMenueHandler = () => setMenuOpen(true)
    const closeMenueHandler = () => setMenuOpen(false)

    /////////////////////////////////////////////////
    // REDUX 
    /////////////////////////////////////////////////
    const dispatch = useDispatch()
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)
    const setAsAdmin = () => dispatch(usersActions.setAsAdmin())
    const setAsUser = () => dispatch(usersActions.setAsUser())
    const reset = () => dispatch(usersActions.reset())
    console.log(isLogedin, userType)
    /////////////////////////////////////////////////
    // FORM
    /////////////////////////////////////////////////
    const [formOpen, setFormIsOpen] = useState(false)
    const [messageError, setMessageError] = useState('')
    const [emailIsValid, setEmailValid] = useState(true)
    const [passwordIsValid, setPasswordValid] = useState(true)

    const emailInput = useRef()
    const passwordInput = useRef()

    const openFormHandler = () => setFormIsOpen(true)
    const removeFormHandler = () => setFormIsOpen(false)
    //-----------------------( Submit user data)-----------------------//
    const submitHandler = (e) => {
        e.preventDefault()
        const email = emailInput.current.value
        const password = passwordInput.current.value
        if (!email.trim() || !password.trim()) { return }
        if (password === 'eid199963' && email === 'ahmedalbakrycool@gmail.com') {
            setMessageError(false)
            setAsAdmin()
            setFormIsOpen(false)
        } else {
            setMessageError('you are not the admin')
            setAsUser()
            setFormIsOpen(false)
        }

    }
    //------------------( Validation form )--------------------------//
    const checkHandler = () => {
        const email = emailInput.current.value
        const password = passwordInput.current.value
        if (!email.trim().includes('@')) { setEmailValid(false) } else { setEmailValid(true) }
        if (password.trim().length <= 5) { setPasswordValid(false) } else { setPasswordValid(true) }
    }
    // inputs style
    const emailInputStyle = emailIsValid ? 'input' : 'input error'
    const passwordInputStyle = passwordIsValid ? 'input' : 'input error'

    return (
        <header className={ classes.header }>
            { formOpen && <div onClick={ removeFormHandler } className='form-bg'></div> }
            { formOpen && <form onSubmit={ submitHandler } className='form'>
                <input ref={ emailInput } onChange={ checkHandler } className={ emailInputStyle } type="email" placeholder='gmail' />
                <input ref={ passwordInput } onChange={ checkHandler } className={ passwordInputStyle } type="password" placeholder="password" />
                <div className='btns-flex'>
                    <button onClick={ submitHandler } className='btn-form btn-send'>add</button>
                    <button onClick={ removeFormHandler } className='btn-form btn-cancle'>cancle</button>
                </div>
                { messageError && <div className="message">{ messageError }</div> }
            </form> }
            <div className={ `${classes.flex} container` }>
                <div className={ classes.logo }>Ahmed Eid</div>
                <div className={ classes['o-icon-cover'] }>
                    <FontAwesomeIcon onClick={ openMenueHandler } icon={ faBars } className={ `${classes.faBars} ${classes.icon}` } />
                </div>
                <nav style={ { 'left': navStyle } } className={ classes.nav }>
                    <div className={ classes['x-icon-cover'] }>
                        <FontAwesomeIcon onClick={ closeMenueHandler } icon={ faXmark } className={ `${classes.faXmark} ${classes.icon}` } />
                    </div>
                    <ul className={ classes.list }>
                        <li className={ classes['list-item'] }><a href="#">Home</a></li>
                        <li className={ classes['list-item'] }><a href="#">About</a></li>
                        <li className={ classes['list-item'] }><a href="#">projects</a></li>
                        <li className={ classes['list-item'] }><a href="#">contactus</a></li>
                        { !isLogedin && <button onClick={ openFormHandler } className={ `${classes.btn} ${classes['btn-login']}` }>login</button> }
                        { isLogedin && <button onClick={ reset } className={ `${classes.btn} ${classes['btn-login']}` }>logout</button> }
                    </ul>
                </nav>
            </div>

        </header>
    )
}
export default Header