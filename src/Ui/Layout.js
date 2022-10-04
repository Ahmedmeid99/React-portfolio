import Navbar from "../layout/Navbar"
const Layout = (props) => {
    return (
        <div className="section">
            <Navbar />
            { props.children }
        </div>
    )
};
export default Layout