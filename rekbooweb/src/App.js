import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import HowItWorks from './Pages/HowItWorks';
import PlannerAddress from './Pages/PlannerAddress';
import PlannerCheckout from './Pages/PlannerCheckout';
import PlannerMeals from './Pages/PlannerMeals';
import PlannerPlan from './Pages/PlannerPlan';
import PlannerRegister from './Pages/PlannerRegister';
import Login from './Pages/Login';
import Page404 from './Pages/Page404';
import AdminMeals from './Pages/AdminMeals';
import AdminOrders from './Pages/AdminOrders';
import AdminUsers from './Pages/AdminUsers';
import AdminReports from './Pages/AdminReports';
import Register from './Pages/Register';

import { updIsAuthenticated } from './redux/actions/isAuthenticatedActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.isAuthenticated);
    
  useEffect(() => {
    dispatch(updIsAuthenticated());
  }, []);

  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/howitworks' element={<HowItWorks/>}/>
            <Route path='/login' element={isAuthenticated ? (<Navigate to='/'/>) : (<Login/>)}/>{/*fix - put this logic in Login*/}
            <Route path='/register' element={isAuthenticated ? (<Navigate to='/'/>) : (<Register/>)}/>{/*fix - put this logic in Register*/}
            <Route path='/adminmeals' element={<AdminMeals/>}/>
            <Route path='/adminorders' element={<AdminOrders/>}/>
            <Route path='/adminusers' element={<AdminUsers/>}/>
            <Route path='/adminreports' element={<AdminReports/>}/>
            <Route path='/plannerplan' element={<PlannerPlan/>}/>
            <Route path='/plannerregister' element={isAuthenticated ? (<Navigate to='/planneraddress'/>) : (<PlannerRegister/>)}/>{/*add check if order(redux state) is null and navigate to plannerplan*/}
            <Route path='/planneraddress' element={isAuthenticated ? (<PlannerAddress/>) : (<Navigate to='/plannerplan'/>)}/>{/*add check if order(redux state) is null and navigate to plannerplan*/}
            {/* <Route path='/plannercheckout' element={<PlannerCheckout/>}/> */}
            <Route path='/plannermeals' element={isAuthenticated ? (<PlannerMeals/>) : (<Navigate to='/plannerplan'/>)}/>{/*add check if order(redux state) is null and navigate to plannerplan*/}
            <Route path='/*' element={<Page404/>}/>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
