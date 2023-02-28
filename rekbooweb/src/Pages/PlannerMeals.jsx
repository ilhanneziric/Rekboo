import '../Styles/plannermeals.scss'
import MealCard from "../Components/MealCard"
import Wizard from "../Components/Wizard"
import { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import PlannerMealsModal from "../Components/PlannerMealsModal"
import { useDispatch, useSelector } from "react-redux"
import { getMeals } from "../redux/actions/mealsActions"
import { HashLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"
import { updateOrder } from '../redux/actions/orderActions'

const PlannerMeals = () => {
  const dispatch = useDispatch();
  const mealsData = useSelector(state => state.meals);
  const order = useSelector(state => state.order);
  const {meals, loading, error} = mealsData;
  
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const openModal = (m) => {
    setMeal(m);
    setShow(true);
  }

  const addMealToOrder = (meal) => { dispatch(updateOrder({...order, meals: [...order.meals, meal]})); };
  const removeMealFromOrder = (meal) => { dispatch(updateOrder({...order, meals: order.meals.filter(m => m.mealID !== meal.mealID)})); };

  useEffect(() => {
    if(order === null){
      navigate('/plannerplan');
    }else{
      dispatch(getMeals({tags: order.tags, active: true}));
    }
  },[dispatch]);
  return (
    <>
      <Header/>
      <Wizard level={7}/>
      {}
      {meals.length === 0 && <h2 className="registerTitle">NEMAMO TRENUTNO JELA KOJA ODGOVARAJU VAŠIM PREFERENCAMA!</h2>}
      <div className="plannerMealsContainer">
        {
          loading?<HashLoader color={"#59de09"}/>:
          (meals.length !== 0? <h2 className="registerTitle">ODABERITE {order.numberOfMeals} JELA</h2>:
          meals.length !== 0 && <h2 className="registerTitle">ODABERITE {order.numberOfMeals} JELA</h2>,
          meals?.map(m => <div key={m.mealID}><MealCard meal={m} add={addMealToOrder} remove={removeMealFromOrder} added={order.meals.some(x => x.mealID === m.mealID)}/></div>))
        }
      </div>
      {
        (!loading && meals.length !== 0) &&
        <div className="plannerMealsNextBtnContainer">
          <div className="plannerMealsNextBtnData plennerMealsNextBtnDisabled">
          <span>Odabrano <b>2/</b></span>
          <span><b>{order.numberOfMeals}</b>   </span>
          <span>| DALJE</span>
          </div>
        </div>
      }
      <Footer/>
      <PlannerMealsModal show={show} handleClose={handleClose} meal={meal}/>
    </>
  )
}

export default PlannerMeals