import { useSelector } from "react-redux";
import Navbar from "../layout/Navbar"
const HeaderLayout = (props) => {
    const them = useSelector((state) => state.them.them)

    return (
        <>
            <div className={ `section ${them}` }>
                <Navbar />
                { props.children }
            </div>
        </>
    )
};
export default HeaderLayout