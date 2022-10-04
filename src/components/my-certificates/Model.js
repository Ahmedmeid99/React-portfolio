import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classes from './Model.module.css'
import Addcertificate from './Addcertificate'
const Model = () => {
    const [addFormOpen, setAddFormIsOpen] = useState(false)
    const openHandler = () => setAddFormIsOpen(true)
    const removeAddFormHandler = () => setAddFormIsOpen(false)
    //
    const isLogedin = useSelector((state) => state.users.isLogedin)
    const userType = useSelector((state) => state.users.userType)
    return (
        <>
            { isLogedin && userType === 'admin' && <button onClick={ openHandler } className={ classes['btn-add'] }><FontAwesomeIcon icon={ faPlus } /></button> }
            { addFormOpen && <div onClick={ removeAddFormHandler } className='form-bg'></div> }
            { addFormOpen &&
                <Addcertificate removeAddFormHandler={ removeAddFormHandler } /> }
        </>
    )
}
export default Model