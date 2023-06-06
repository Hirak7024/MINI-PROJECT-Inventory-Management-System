import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {
    return (
        <>
            <div className="navbarContainer">
                <div className="leftBox"><h2 className="logo">Inventory</h2></div>
                <div className="rightBox">
                    <PersonIcon />
                    <span className="adminName">Admin Name</span>
                </div>
            </div>
        </>
    )
}
