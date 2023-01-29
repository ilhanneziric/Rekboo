import '../Styles/adminusers.scss'
import AdminNavigation from "../Components/AdminNavigation"
import AdminUsersTable from "../Components/AdminUsersTable"
import Header from "../Components/Header"

const AdminUsers = () => {
  return (
    <>
      <AdminNavigation activeItem={'users'}/>
      <div className="adminUsersTblContainer">
        <AdminUsersTable/>
      </div>
      <Header/>
    </>
  )
}

export default AdminUsers