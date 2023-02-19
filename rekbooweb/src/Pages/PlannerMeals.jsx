import MealCard from "../Components/MealCard"
import Wizard from "../Components/Wizard"
import '../Styles/plannermeals.scss'
import { useEffect, useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import PlannerMealsModal from "../Components/PlannerMealsModal"
import { useDispatch, useSelector } from "react-redux"
import { getMeals } from "../redux/actions/mealsActions"
import { HashLoader } from "react-spinners"

const PlannerMeals = () => {
  const dispatch = useDispatch();
  const mealsData = useSelector(state => state.meals);
  const {meals, loading, error} = mealsData;
  
  const [meal, setMeal] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const openModal = (m) => {
    setMeal(m);
    setShow(true);
  }

  useEffect(() => {
    dispatch(getMeals());
  },[dispatch]);
  return (
    <>
      <Header/>
      <Wizard level={5}/>
      <h2 className="registerTitle">ODABERITE 3 JELA</h2>
      <div className="plannerMealsContainer">
        {
          loading?<HashLoader color={"#59de09"}/>:
          meals?.map(m => <div key={m.mealID} onClick={(e) => openModal(m)}><MealCard meal={m}/></div>)
        }
      </div>
      <Footer/>
      <PlannerMealsModal show={show} handleClose={handleClose} meal={meal}/>
    </>
  )
}

export default PlannerMeals