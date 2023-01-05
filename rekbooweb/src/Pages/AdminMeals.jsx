import '../Styles/adminmeals.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"

const AdminMeals = () => {
  return (
    <>
      <AdminNavigation activeItem={'meals'}/>
      <Header/>
    </>
  )
}

export default AdminMeals