import React from "react";
import HeaderLayout from '../Ui/HeaderLayout'
import Layout from '../Ui/Layout'
import ProjectsHeader from '../layout/headers/ProjectsHeader'
import Projects from '../components/projects/Projects'
import Certificates from '../components/my-certificates/Certificates'
const ProjectsPage = () => {
    return (
        <Layout>
            <HeaderLayout>
                <ProjectsHeader />
            </HeaderLayout>
            <Projects />
            <Certificates />
        </Layout>
    )
};
export default ProjectsPage