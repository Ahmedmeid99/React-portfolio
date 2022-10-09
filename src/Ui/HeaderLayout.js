import Navbar from "../layout/Navbar"
const HeaderLayout = (props) => {
    return (
        <>
            <div className="section">
                <Navbar />
                { props.children }
            </div>
        </>
    )
};
export default HeaderLayout