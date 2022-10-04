import React from "react";
import Layout from '../Ui/Layout'
import HomeHeader from '../layout/headers/HomeHeader'
import Projects from '../components/projects/Projects'
import Certificates from '../components/my-certificates/Certificates'
const HomePage = () => {
  return (
    <>
      <Layout>
        <HomeHeader />
      </Layout>
      <Projects />
      <Certificates />
    </>
  )
};
export default HomePage