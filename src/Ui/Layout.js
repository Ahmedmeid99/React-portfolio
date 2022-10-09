import Footer from "../layout/Footer"
const Layout = (props) => {
    return (
        <>
            { props.children }
            <Footer />

        </>
    )
};
export default Layout