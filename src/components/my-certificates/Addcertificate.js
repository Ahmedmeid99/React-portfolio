import { useState, useRef } from "react"
import certificatesActions from "../../redux/certificatesSlice"
import { useSelector, useDispatch } from "react-redux"

const Addcertificate = (props) => {
    const dispatch = useDispatch()
    const imgInput = useRef('')
    const liveInput = useRef('')
    const typeInput = useRef('')
    const submitHandler = (e) => {
        e.preventDefault()
        const imgLink = imgInput.current.value
        const liveLink = liveInput.current.value
        const type = typeInput.current.value
        const newcertificate = {
            imgLink,
            liveLink,
            type,
        }
        dispatch(certificatesActions.addcertificate(newcertificate))
    }

    return (
        <>
            <form className='form' onSubmit={ submitHandler }>
                <input ref={ imgInput } className={ 'input' } type="text" placeholder='img link' />
                <input ref={ liveInput } className={ 'input' } type="text" placeholder='live link' />
                <input ref={ typeInput } className={ 'input' } type="text" placeholder='type' />
                <div className='btns-flex'>
                    <button className='btn-form btn-send'>add</button>
                    <button onClick={ props.removeAddFormHandler } className='btn-form btn-cancle'>cancle</button>
                </div>
            </form>
        </>
    )
}
export default Addcertificate