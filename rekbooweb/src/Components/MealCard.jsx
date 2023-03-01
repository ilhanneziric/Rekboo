import '../Styles/mealcard.scss'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import { BiTimeFive, BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';

const MealCard = ({meal, add, remove, added, fullOrder}) => {
  const [showNav, setShowNav] = useState(false);

  const images = [
    { original: `data:image/png;base64,${meal.photo1}` },
    { original: `data:image/png;base64,${meal.photo2}` },
  ];
  
  const handleMouseEnter = () => { setShowNav(true); };
  const handleMouseLeave = () => { setShowNav(false); };

  return (
    <>
        <div className="mealCardContainer">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ImageGallery 
            items={images} 
            className="custom-image-gallery"
            showThumbnails={false} 
            showPlayButton={false} 
            showNav={showNav}
            />
        </div>
            <div className="mealCardDescriptionContainer">
                <div className="mealCardTitle">{meal.name}</div>
                <div className="mealCardDescription">{meal.description}</div> 
                <div className="mealCardTagContainer">
                  { meal?.tags.map((tag, index) => <div className="mealCardTag" key={index}><b>{tag}</b></div>) }    
                </div>
                {
                  <div className="mealCardDescriptionFooter">
                    <div className="mealCardKcalTime"><AiOutlineFire/> 200kcal</div>  
                    <div className="mealCardKcalTime"><BiTimeFive/> 20min</div>  
                    {
                      !added ? 
                      fullOrder ? 
                        <div className="mealCardDescriptionAddMealToOrder mealCardDescriptionAddMealToOrderDisabled"><span className='MealCardDescriptionBtnText'>DODAJ</span> <BiPlusCircle/></div>:   
                        <div className="mealCardDescriptionAddMealToOrder" onClick={() => add(meal)}><span className='MealCardDescriptionBtnText'>DODAJ</span> <BiPlusCircle/></div>:
                      <div className="mealCardDescriptionRemoveMealToOrder" onClick={() => remove(meal)}><span className='MealCardDescriptionBtnText'>UKLONI</span> <BiMinusCircle/></div>
                    }
                    </div>   
                }
            </div>
            </div>
    </>
  )
}

export default MealCard