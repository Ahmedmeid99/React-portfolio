// import { useEffect ,useState} from "react"

// useEffect(()=>{

// },[])
const AddProject = (props) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form className='form' onSubmit={ submitHandler }>
                <input className={ 'input' } type="text" placeholder='img link' />
                <input className={ 'input' } type="text" placeholder='githup link' />
                <input className={ 'input' } type="text" placeholder='live link' />
                <div className="inputs-tools">
                    <input className={ 'input' } type="text" placeholder='main tool' />
                    <input className={ 'input' } type="text" placeholder='tools react,js,node' />
                </div>
                <input className={ 'input' } type="text" placeholder='title' />
                <textarea className={ 'input textarea' } type="text" minLength={ 160 } maxLength={ 200 } placeholder="describtion" />
                <div className='btns-flex'>
                    <button className='btn-form btn-send'>add</button>
                    <button onClick={ props.removeAddFormHandler } className='btn-form btn-cancle'>cancle</button>
                </div>
            </form>
        </>
    )
}
export default AddProject