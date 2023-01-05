import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
import Header from './Components/Header';
import AdminMeals from './Pages/AdminMeals';
import AdminOrders from './Pages/AdminOrders';
import AdminUsers from './Pages/AdminUsers';
import AdminReports from './Pages/AdminReports';
import Footer from './Components/Footer';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/howitworks' element={<HowItWorks/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/adminmeals' element={<AdminMeals/>}/>
            <Route path='/adminorders' element={<AdminOrders/>}/>
            <Route path='/adminusers' element={<AdminUsers/>}/>
            <Route path='/adminreports' element={<AdminReports/>}/>
            <Route path='/plannerplan' element={<PlannerPlan/>}/>
            <Route path='/planneraddress' element={<PlannerAddress/>}/>
            <Route path='/plannerregister' element={<PlannerRegister/>}/>
            <Route path='/plannercheckout' element={<PlannerCheckout/>}/>
            <Route path='/plannermeals' element={<PlannerMeals/>}/>
            <Route path='/*' element={<Page404/>}/>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
