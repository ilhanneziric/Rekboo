import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from './Screens/HomePage';
import AboutUs from './Screens/AboutUs';
import HowItWorks from './Screens/HowItWorks';
import PlannerAddress from './Screens/PlannerAddress';
import PlannerCheckout from './Screens/PlannerCheckout';
import PlannerMeals from './Screens/PlannerMeals';
import PlannerPlan from './Screens/PlannerPlan';
import PlannerRegister from './Screens/PlannerRegister';
import Login from './Screens/Login';
import Page404 from './Screens/Page404';

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
