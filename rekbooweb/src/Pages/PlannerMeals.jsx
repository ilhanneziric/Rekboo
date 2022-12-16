import MealCard from "../Components/MealCard"
import Wizard from "../Components/Wizard"
import '../Styles/plannermeals.scss'

const PlannerMeals = () => {
  return (
    <>
    <Wizard/>
    <h2 className="registerTitle">ODABERITE 3 JELA</h2>
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