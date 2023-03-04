import '../Styles/adminorders.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"
import AdminOrdersTable from '../Components/AdminOrdersTable'

const AdminOrders = () => {
  return (
    <>
      <AdminNavigation activeItem={'orders'}/>
      <Header/>
      <div className="adminUsersTblContainer">
        <AdminOrdersTable/>
      </div>
    </>
  )
}

export default AdminOrders