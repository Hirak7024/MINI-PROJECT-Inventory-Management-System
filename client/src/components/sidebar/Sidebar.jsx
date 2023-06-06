import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import AppsIcon from '@mui/icons-material/Apps';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [items,setItems] = useState(false);
    const changeFunction = ()=>{
        setItems(true);
    }
  return (
    <>
    <div className="sideBarContainer">
        <ul className="sideBarList">
            <li className="sideBarListItems">
            <SpaceDashboardIcon />
            <Link to={'/'} className="sideBarLinkItem"><span>Dashboard</span></Link>
            </li>
            <li className="sideBarListItems">
            <CategoryIcon />
             <Link className="sideBarLinkItem" to={"/items"}><span >Items</span></Link>
            </li>
            <li className="sideBarListItems">
            <AppsIcon />
            <Link  className="sideBarLinkItem" to={'/category'}><span>Category</span></Link> 
            </li>
            <li className="sideBarListItems">
            <ViewInArIcon />
            <span>Products</span>
            </li>
            <li className="sideBarListItems">
            <CurrencyRupeeIcon />
            <span>Orders</span>
            </li>
            <li className="sideBarListItems">
            <PowerSettingsNewIcon />
             <Link to={'/SignIn'} className="sideBarLinkItem" ><span>Logout</span></Link> 
            </li>
        </ul>
    </div>
    </>
  )
}
