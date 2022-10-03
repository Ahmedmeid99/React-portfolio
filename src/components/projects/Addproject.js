import { useState, useRef } from "react"
import projectsActions from "../../redux/projectsSlice"
import { useSelector, useDispatch } from "react-redux"

const AddProject = (props) => {
    const dispatch = useDispatch()
    const imgInput = useRef('')
    const githubInput = useRef('')
    const liveInput = useRef('')
    const mainToolInput = useRef('')
    const toolsInput = useRef('')
    const titleInput = useRef('')
    const descriptionInput = useRef('')
    const submitHandler = (e) => {
        e.preventDefault()
        const imgLink = imgInput.current.value
        const githubLink = githubInput.current.value
        const liveLink = liveInput.current.value
        const mainTool = mainToolInput.current.value
        const tools = toolsInput.current.value
        const title = titleInput.current.value
        const description = descriptionInput.current.value
        const newProject = {
            imgLink,
            githubLink,
            liveLink,
            mainTool,
            tools,
            title,
            description
        }
        dispatch(projectsActions.addProject(newProject))
    }

    return (
        <>
            <form className='form' onSubmit={ submitHandler }>
                <input ref={ imgInput } className={ 'input' } type="text" placeholder='img link' />
                <input ref={ githubInput } className={ 'input' } type="text" placeholder='github link' />
                <input ref={ liveInput } className={ 'input' } type="text" placeholder='live link' />
                <div className="inputs-tools">
                    <input ref={ mainToolInput } className={ 'input' } type="text" placeholder='main tool' />
                    <input ref={ toolsInput } className={ 'input' } type="text" placeholder='tools react,js,node' />
                </div>
                <input ref={ titleInput } className={ 'input' } type="text" placeholder='title' />
                <textarea ref={ descriptionInput } className={ 'input textarea' } type="text" minLength={ 160 } maxLength={ 200 } placeholder="description" />
                <div className='btns-flex'>
                    <button className='btn-form btn-send'>add</button>
                    <button onClick={ props.removeAddFormHandler } className='btn-form btn-cancle'>cancle</button>
                </div>
            </form>
        </>
    )
}
export default AddProject