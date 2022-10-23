import { useEffect, useState } from "react"

import Card from './Card'
import certificatesActions from "../../redux/certificatesSlice"
import { useSelector, useDispatch } from "react-redux"
import classes from "./Cards.module.css"
import Loader from "../loader/Loader"

const Cards = (props) => {
    const dispatch = useDispatch()
    const certificates = useSelector((state) => state.certificates.filtered)
    const [loading, setLoding] = useState(false)

    useEffect(() => {
        fetchingData()
    }, [])
    // GET projects
    const fetchingData = async () => {
        try {
            setLoding(true)
            const responsive = await fetch('https://react-http-f4f9d-default-rtdb.firebaseio.com/portfoliocertificates.json')
            if (!responsive.ok) {
                throw new Error('something went wrong!')
            }
            const data = await responsive.json()
            const certificatesArray = []
            for (const key in data) {
                certificatesArray.push({
                    id: key,
                    imgLink: data[key].imgLink,
                    liveLink: data[key].liveLink,
                    type: data[key].type,
                })
            }
            // return projectsArray
            dispatch(certificatesActions.setcertificates(certificatesArray))
        } catch (e) {
            console.log('error =>')
        }
        setLoding(false)
    }

    return (
        <>
            { loading && <Loader /> }
            <div className={ classes.cards }>
                { !loading && certificates.map((certificate) => <Card key={ certificate.id } certificate={ certificate } />) }
            </div>
        </>
    )
}
export default Cards