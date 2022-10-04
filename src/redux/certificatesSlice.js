// import { Provider, useSelector, useDispatch } from "react-redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"

// POST project
const addOne = async (certificate) => {
    const responsive = await fetch('https://react-http-f4f9d-default-rtdb.firebaseio.com/portfoliocertificates.json', {
        method: 'POST',
        body: JSON.stringify(certificate),
        headers: {
            'Contect-Type': 'application/json',
        }
    })
    const data = await responsive.json()
    console.log(data)
}
export const certificatesSlice = createSlice({
    name: 'certificates',
    initialState: { certificates: [], filtered: [] },
    reducers: {
        setcertificates(state, action) {
            state.certificates = action.payload
            state.filtered = state.certificates.filter((certificate) => certificate.type === 'udemy')
        },
        addcertificate(state, action) {
            action = action.payload
            addOne(action)

        },
        filterBy(state, action) {
            const filteredcertificates = state.certificates.filter((certificate) => certificate.type === action.payload)

            return { ...state, filtered: filteredcertificates }
        }
    }
})

const certificatesActions = certificatesSlice.actions

export default certificatesActions