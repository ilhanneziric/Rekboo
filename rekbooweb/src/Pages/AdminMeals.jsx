import '../Styles/adminmeals.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"
import AdminMealsTable from '../Components/AdminMealsTable'
import AdminMealsModal from '../Components/AdminMealsModal'
import { useState } from 'react'

const AdminMeals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  return (
    <>
      <AdminNavigation activeItem={'meals'}/>
      <div className="addNewMealBtn" onClick={(e) => setShow(true)}>DODAJ NOVO JELO</div>
      <div className="adminUsersTblContainer">
        <AdminMealsTable/>
      </div>
      <Header/>
      <AdminMealsModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default AdminMeals