import MealCard from "../Components/MealCard"
import Wizard from "../Components/Wizard"
import '../Styles/plannermeals.scss'

const PlannerMeals = () => {
  return (
    <>
    <Wizard/>
    <h1 className="registerTitle">ODABERITE 3 JELA</h1>
    <div className="plannerMealsContainer">
      <MealCard/>
      <MealCard/>
      <MealCard/>
      <MealCard/>
      <MealCard/>
      <MealCard/>
    </div>
    </>
  )
}

export default PlannerMeals