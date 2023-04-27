import '../Styles/adminmeals.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"
import AdminMealsTable from '../Components/AdminMealsTable'
import AdminMealsModal from '../Components/AdminMealsModal'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'

const AdminMeals = () => {
  const navigate = useNavigate();
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token !== null){
      const user = jwt(token);
      if(user.role !== 'Admin'){
        navigate('/adminlogin');
      }
    }else{
      navigate('/adminlogin');
    }
  }, []);
  return (
    <>
      <AdminNavigation activeItem={'meals'}/>
      <div className="adminMealsTblContainer">
        <div className="addNewMealBtn" onClick={(e) => setShow(true)}>DODAJ NOVO JELO</div>
        <AdminMealsTable/>
      </div>
      <Header/>
      <AdminMealsModal show={show} handleClose={handleClose}/>
    </>
  )
}

export default AdminMeals