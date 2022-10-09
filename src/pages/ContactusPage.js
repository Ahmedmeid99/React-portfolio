import React from "react";
import HeaderLayout from '../Ui/HeaderLayout'
import Layout from '../Ui/Layout'
import ContactusHeader from '../layout/headers/ContactusHeader'
import ContactLinks from '../components/statics/ContactLinks'
const ContactusPage = () => {
    return (
        <Layout>
            <HeaderLayout>
                <ContactusHeader />
            </HeaderLayout>
            <ContactLinks />
        </Layout>
    )
};
export default ContactusPage