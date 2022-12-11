import '../Styles/mealcard.scss'
import mealPhoto from '../Assets/mealPhoto.png'
const MealCard = () => {
  return (
    <>
        <div className="mealCardContainer">
            <img  className="mealCardPhoto" src={mealPhoto} alt="Meal photo" />
            <div className="mealCardDescriptionContainer">
                <div className="mealCardTitle">Pita zeljanica</div>
                <div className="mealCardDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vero.</div>    
            </div>
            </div>
    </>
  )
}

export default MealCard