// import { useEffect ,useState} from "react"

// useEffect(()=>{

// },[])
import Card from './Card'
import classes from "./Cards.module.css"
const Cards = () => {
    // const [projects,setProjects]=useState()
    return (
        <div className={ classes.cards }>
            <Card />
        </div>
    )
}
export default Cards