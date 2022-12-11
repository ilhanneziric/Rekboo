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
import Admin from './Pages/Admin';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
      <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/howitworks' element={<HowItWorks/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/plannerplan' element={<PlannerPlan/>}/>
            <Route path='/planneraddress' element={<PlannerAddress/>}/>
            <Route path='/plannerregister' element={<PlannerRegister/>}/>
            <Route path='/plannercheckout' element={<PlannerCheckout/>}/>
            <Route path='/plannermeals' element={<PlannerMeals/>}/>
            <Route path='/*' element={<Page404/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
