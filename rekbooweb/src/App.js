import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import HowItWorks from './Pages/HowItWorks';
import PlannerAddress from './Pages/PlannerAddress';
import PlannerCheckout from './Pages/PlannerCheckout';
import PlannerMeals from './Pages/PlannerMeals';
import PlannerOverview from './Pages/PlannerOverview';
import PlannerPlan from './Pages/PlannerPlan';
import PlannerRegister from './Pages/PlannerRegister';
import Login from './Pages/Login';
import Page404 from './Pages/Page404';
import AdminMeals from './Pages/AdminMeals';
import AdminOrders from './Pages/AdminOrders';
import AdminUsers from './Pages/AdminUsers';
import AdminReports from './Pages/AdminReports';
import Register from './Pages/Register';
import UserOrders from './Pages/UserOrders';

import { updIsAuthenticated } from './redux/actions/isAuthenticatedActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const isAdmin = useSelector(state => state.isAdmin);
    
  useEffect(() => {
    dispatch(updIsAuthenticated());
  }, []);

  return (
    <>
      <Router>
        {/* <div className='container'> */}
        <div className=''>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            {/* <Route path='/aboutus' element={<AboutUs/>}/> */}
            <Route path='/howitworks' element={<HowItWorks/>}/>
            <Route path='/userorders' element={<UserOrders/>}/>
            <Route path='/login' element={isAuthenticated ? (<Navigate to='/'/>) : (<Login/>)}/>
            <Route path='/register' element={isAuthenticated ? (<Navigate to='/'/>) : (<Register/>)}/>
            <Route path='/adminlogin' element={isAdmin ? (<Navigate to='/adminmeals'/>) : (<Login/>)}/>
            <Route path='/adminmeals' element={<AdminMeals/>}/>
            <Route path='/adminorders' element={<AdminOrders/>}/>
            <Route path='/adminusers' element={<AdminUsers/>}/>
            <Route path='/adminreports' element={<AdminReports/>}/>
            <Route path='/plannerplan' element={<PlannerPlan/>}/>
            <Route path='/plannerregister' element={<PlannerRegister/>}/>
            <Route path='/planneraddress' element={<PlannerAddress/>}/>
            {/* <Route path='/plannercheckout' element={<PlannerCheckout/>}/> */}
            <Route path='/plannermeals' element={<PlannerMeals/>}/>
            <Route path='/planneroverview' element={<PlannerOverview/>}/>
            <Route path='/*' element={<Page404/>}/>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
