import React from "react";
import HeaderLayout from '../Ui/HeaderLayout'
import Layout from '../Ui/Layout'
import AboutHeader from '../layout/headers/AboutHeader'
import AboutDetails from '../components/statics/AboutDetails'

const AboutPage = () => {
    return (
        <Layout>
            <HeaderLayout>
                <AboutHeader />
            </HeaderLayout>
            <AboutDetails />
        </Layout>
    )
};
export default AboutPage