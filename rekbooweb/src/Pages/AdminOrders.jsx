import '../Styles/adminorders.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"

const AdminOrders = () => {
  return (
    <>
      <AdminNavigation activeItem={'orders'}/>
      <Header/>
    </>
  )
}

export default AdminOrders