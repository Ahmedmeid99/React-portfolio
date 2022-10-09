import React from "react";
import HeaderLayout from '../Ui/HeaderLayout'
import Layout from '../Ui/Layout'
import HomeHeader from '../layout/headers/HomeHeader'
import Projects from '../components/projects/Projects'
import Certificates from '../components/my-certificates/Certificates'
const HomePage = () => {
  return (
    <Layout>
      <HeaderLayout>
        <HomeHeader />
      </HeaderLayout>
      <Projects />
      <Certificates />
    </Layout>
  )
};
export default HomePage