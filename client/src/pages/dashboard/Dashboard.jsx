import './dashboard.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DashboardItems from '../../components/dashboardItems/DashboardItems';

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="dashboardContainer">
        <Sidebar/>
        <DashboardItems />
    </div>
    </>
  )
}
