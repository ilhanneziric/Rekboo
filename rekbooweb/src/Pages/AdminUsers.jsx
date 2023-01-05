import '../Styles/adminusers.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"

const AdminUsers = () => {
  return (
    <>
      <AdminNavigation activeItem={'users'}/>
      <Header/>
    </>
  )
}

export default AdminUsers