import React from "react";
import Layout from '../Ui/Layout'
import AboutHeader from '../layout/headers/AboutHeader'
import AboutDetails from '../components/statics/AboutDetails'

const AboutPage = () => {
    return (
        <>
            <Layout>
                <AboutHeader />
            </Layout>
            <AboutDetails />
        </>
    )
};
export default AboutPage