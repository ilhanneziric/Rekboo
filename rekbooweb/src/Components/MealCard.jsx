import '../Styles/mealcard.scss'
import ImageGallery from 'react-image-gallery';
import { BiTimeFive, BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { HashLoader } from "react-spinners"

const MealCard = ({meal, add, remove, added, fullOrder}) => {
  const [showNav, setShowNav] = useState(false);
  const [images, setImages] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const ref = useRef(null);
  // const observerRef = useRef(null);

  const handleMouseEnter = () => { setShowNav(true); };
  const handleMouseLeave = () => { setShowNav(false); };

  const createUrlFromBase64 = (base64String) => {
    const binaryString = window.atob(base64String);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([uint8Array], { type: "image/png" });
    const url = URL.createObjectURL(blob);

    return url;
  }

  // const handleIntersection = (entries) => {
  //   const [entry] = entries;
  //   if(entry.isIntersecting){
  //     getImages(meal);
  //     if (observerRef.current) {
  //       observerRef.current.unobserve(ref.current);
  //     }
  //   }
  // }

  const getImages = (meal) => {
    setImages([
      { original: createUrlFromBase64(meal.photo1) },
      { original: createUrlFromBase64(meal.photo2) }
    ]);
    // setLoading(false);
  }

  useEffect(() => {
    if(meal !== null){
      getImages(meal);
    }

    // if(meal !== null){
    //   const options = {
    //     rootMargin: "0px 0px 100px 0px",
    //   };
    //   observerRef.current = new IntersectionObserver(handleIntersection, options);
    //   if (ref.current) {
    //     observerRef.current.observe(ref.current);
    //   }
    //   return () => observerRef.current.disconnect();
    // }
  }, []);
  return (
    <>
      <div className="mealCardContainer">
        {/* <div ref={ref}>
          {loading ? <div className="mealCardLoaderImage"><HashLoader color={"#59de09"}/></div> :
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ImageGallery 
            items={images} 
            showThumbnails={false} 
            showPlayButton={false} 
            showNav={showNav}
            />
        </div>}
        </div> */}
       {images ? <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ImageGallery 
            items={images} 
            showThumbnails={false} 
            showPlayButton={false} 
            showNav={showNav}
            />
        </div>:
        <div className="mealCardLoaderImage"><HashLoader color={"#59de09"}/></div>}
        <div className="mealCardDescriptionContainer">
          {
            added?
            <div className="mealCardTitle">{meal.name}<BsCheck color='#59de09' size={'1.5rem'}/></div>:
            <div className="mealCardTitle">{meal.name}</div>
          }
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