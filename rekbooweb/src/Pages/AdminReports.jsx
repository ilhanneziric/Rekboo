import '../Styles/adminreports.scss'
import AdminNavigation from "../Components/AdminNavigation"
import Header from "../Components/Header"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

const AdminReports = () => {
  const navigate = useNavigate();
  
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
      <AdminNavigation activeItem={'reports'}/>
      <Header/>
    </>
  )
}

export default AdminReports