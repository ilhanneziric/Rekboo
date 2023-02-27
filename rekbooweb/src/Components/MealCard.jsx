import '../Styles/mealcard.scss'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

const MealCard = ({meal}) => {
  const [showNav, setShowNav] = useState(false);

  const images = [
    {
      original: `data:image/png;base64,${meal.photo1}`
    },
    {
      original: `data:image/png;base64,${meal.photo2}`
    },
  ];

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    setShowNav(false);
  };
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
            </div>
            </div>
    </>
  )
}

export default MealCard