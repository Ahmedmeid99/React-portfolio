import Footer from "../layout/Footer"
import React from "react";
const Layout = (props) => {
    return (
        <>
            { props.children }
            <Footer />

        </>
    )
};
export default Layout