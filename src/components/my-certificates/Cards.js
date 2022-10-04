import { useEffect, useState } from "react"

import Card from './Card'
import certificatesActions from "../../redux/certificatesSlice"
import { useSelector, useDispatch } from "react-redux"
import classes from "./Cards.module.css"

const Cards = (props) => {
    const dispatch = useDispatch()
    const certificates = useSelector((state) => state.certificates.filtered)

    useEffect(() => {
        fetchingData()
    }, [])
    // GET projects
    const fetchingData = async () => {
        try {
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
    }

    return (
        <div className={ classes.cards }>
            { certificates.map((certificate) => <Card key={ certificate.id } certificate={ certificate } />) }
        </div>
    )
}
export default Cards