import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classes from './Model.module.css'
import AddProject from './Addproject'
const Model = () => {
    const [formOpen, setFormIsOpen] = useState(false)
    const [addFormOpen, setAddFormIsOpen] = useState(false)
    const [messageError, setMessageError] = useState('')

    const [emailIsValid, setEmailValid] = useState(true)
    const [passwordIsValid, setPasswordValid] = useState(true)

    const emailInput = useRef()
    const passwordInput = useRef()

    const openHandler = () => setFormIsOpen(true)
    const removeFormHandler = () => setFormIsOpen(false)
    const removeAddFormHandler = () => setAddFormIsOpen(false)
    const submitHandler = (e) => {
        e.preventDefault()
        const email = emailInput.current.value
        const password = passwordInput.current.value
        if (password === 'eid199963' && email === 'ahmedalbackrycool@gmail.com') {
            setAddFormIsOpen(true)
            setMessageError(false)
            setFormIsOpen(false)
        }
        setMessageError('you are not the admin')

    }
    const checkHandler = () => {
        const email = emailInput.current.value
        const password = passwordInput.current.value
        if (!email.trim() || !password.trim()) { return }
        if (!email.trim().includes('@')) { setEmailValid(false) } else { setEmailValid(true) }
        if (password.trim().length <= 5) { setPasswordValid(false) } else { setPasswordValid(true) }
    }
    const emailInputStyle = emailIsValid ? 'input' : 'input error'
    const passwordInputStyle = passwordIsValid ? 'input' : 'input error'

    return (
        <>
            <button onClick={ openHandler } className={ classes['btn-add'] }><FontAwesomeIcon icon={ faPlus } /></button>
            { formOpen && <div onClick={ removeFormHandler } className='form-bg'></div> }
            { formOpen && <form onSubmit={ submitHandler } className='form'>
                <input ref={ emailInput } onChange={ checkHandler } className={ emailInputStyle } type="email" placeholder='gmail' />
                <input ref={ passwordInput } onChange={ checkHandler } className={ passwordInputStyle } type="password" placeholder="password" />
                <div className='btns-flex'>
                    <button onClick={ submitHandler } className='btn-form btn-send'>add</button>
                    <button onClick={ removeFormHandler } className='btn-form btn-cancle'>cancle</button>
                </div>
                { messageError && <div className={ classes.message }>{ messageError }</div> }
            </form> }
            {/*  */ }
            { addFormOpen && <div onClick={ removeAddFormHandler } className='form-bg'></div> }
            { addFormOpen &&
                <AddProject removeAddFormHandler={ removeAddFormHandler } /> }

        </>

    )
}
export default Model