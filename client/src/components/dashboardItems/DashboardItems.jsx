import Card from "../cards/Card"
import "./dashboardItems.css"

export default function DashboardItems() {
  return (
   <>
   <div className="dashboardItemsContainer">
    <h1 className="dashboardHeading">Dashboard</h1>
    <div className="dashboardCardContainer">
       < Card quantity='10' heading="Total Items" backgroundColor='rgb(0,190,238)' />
       < Card quantity='6' heading="Total Products" backgroundColor='rgb(1,165,90)'  />
       < Card quantity='7' heading="Total Category"  backgroundColor='rgb(252,155,22)'/>
       < Card quantity='200000' heading="Total Sales" backgroundColor='rgb(221,76,58)' />
       {/* < Card quantity='5' heading="Total Paid Orders"  />
       < Card quantity='2' heading="Total Unpaid Orders"  /> */}
    </div>
   </div>
   </>
  )
}
