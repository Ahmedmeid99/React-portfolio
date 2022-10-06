import React from "react";
import Layout from '../Ui/Layout'
import ProjectsHeader from '../layout/headers/ProjectsHeader'
import Projects from '../components/projects/Projects'
import Certificates from '../components/my-certificates/Certificates'
const ProjectsPage = () => {
    return (
        <>
            <Layout>
                <ProjectsHeader />
            </Layout>
            <Projects />
            <Certificates />
        </>
    )
};
export default ProjectsPage