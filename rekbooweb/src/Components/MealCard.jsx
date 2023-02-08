import '../Styles/mealcard.scss'

const MealCard = ({meal}) => {
  return (
    <>
        <div className="mealCardContainer">
            <img  className="mealCardPhoto" src={`data:image/png;base64,${meal.photo1}`} alt="Meal photo" />
            <div className="mealCardDescriptionContainer">
                <div className="mealCardTitle">{meal.name}</div>
                <div className="mealCardDescription">{meal.description}</div>    
            </div>
            </div>
    </>
  )
}

export default MealCard