import React from "react";
import Layout from '../Ui/Layout'
import ContactusHeader from '../layout/headers/ContactusHeader'
import ContactLinks from '../components/statics/ContactLinks'
const ContactusPage = () => {
    return (
        <>
            <Layout>
                <ContactusHeader />
            </Layout>
            <ContactLinks />
        </>
    )
};
export default ContactusPage