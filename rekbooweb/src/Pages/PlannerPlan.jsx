import '../Styles/plannerplan.scss'
import Wizard from "../Components/Wizard"
import TagCard from '../Components/TagCard'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { useDispatch } from 'react-redux';
import { updateOrder } from "../redux/actions/orderActions"
import { useEffect, useState } from 'react';


const PlannerPlan = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    numberOfMeals: null,
    numberOfPeople: null,
    tags: []
  })

  const [validationError, setValidationError] = useState(null);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  
  const checkProgress = () => {
    var prog = 0;
    if(order.numberOfPeople !== null){
      prog ++;
    }
    if(order.numberOfMeals !== null){
      prog ++;
    }
    if(order.tags.length !== 0){
      prog ++;
    }
    setProgress(prog);
  }

  const createPlan = () => {
    if(order.numberOfPeople === null){
      setValidationError('Morate odabrati broj osoba!');
    }else if(order.numberOfMeals === null){
      setValidationError('Morate odabrati broj jela!');
    }else if(order.tags.length === 0){
      setValidationError('Morate odabrati najmanje jednu kategoriju jela!');
    }else{
      setValidationError('OK!');
    }
    dispatch(updateOrder(order));
    navigate('/plannerregister');
  }

  const addNoOfPeopleTag = (number) => { setOrder({...order, numberOfPeople: number}); }
  const removeNoOfPeopleTag = (number) => { setOrder({...order, numberOfPeople: null}); }

  const addNoOfMealsTag = (number) => { setOrder({...order, numberOfMeals: number}); }
  const removeNoOfMealsTag = (number) => { setOrder({...order, numberOfMeals: null}); }

  const addCategoryTag = (tag) => { setOrder(prevState => ({...prevState, tags: [...prevState.tags, tag] })); }
  const removeCategoryTag = (tag) => { setOrder({...order, tags: order.tags.filter(str => str !== tag)}); }

  useEffect(() => {
    checkProgress(); 
  }, [order]);

  return (
    <>
      <Header/>
      <Wizard level={progress}/>      
      <div>
        <h2 className="planTitle">ODABERI SVOJ PLAN</h2>
        <div className="plannerPlanContainer">
          <div className="planLeftContainer">
            <div className="noOfContainers">
              <h4 className="noOfTitle">BROJ OSOBA:</h4>
              <div className="noOfCardContainer">
                <TagCard name={'2'} addTag={addNoOfPeopleTag} removeTag={removeNoOfPeopleTag} checked={order.numberOfPeople === '2'}/>
                <TagCard name={'4'} addTag={addNoOfPeopleTag} removeTag={removeNoOfPeopleTag} checked={order.numberOfPeople === '4'}/>
              </div>
            </div>
            <div className="noOfContainers">
              <h4 className="noOfTitle">KATEGORIJE:</h4>{/*HARDCODED | TODO -> ADD TAGS IN CACHE*/}
              <TagCard name={'MODERNO'} addTag={addCategoryTag} removeTag={removeCategoryTag} checked={order.tags?.includes('MODERNO')}/>
              <TagCard name={'ZDRAVO'} addTag={addCategoryTag} removeTag={removeCategoryTag} checked={order.tags?.includes('ZDRAVO')}/>
              <TagCard name={'AZIJSKO'} addTag={addCategoryTag} removeTag={removeCategoryTag} checked={order.tags?.includes('AZIJSKO')}/>
              <TagCard name={'TRADICIONALNO'} addTag={addCategoryTag} removeTag={removeCategoryTag} checked={order.tags?.includes('TRADICIONALNO')}/>
              <TagCard name={'MEDITERANSKO'} addTag={addCategoryTag} removeTag={removeCategoryTag} checked={order.tags?.includes('MEDITERANSKO')}/>
            </div>
          </div>
          <div className="planRightContainer">
            <div className="noOfContainers">
              <h4 className="noOfTitle">BROJ RECEPATA SEDMIČNO:</h4>
              <div className="noOfCardContainer">
                <TagCard name={'2'} addTag={addNoOfMealsTag} removeTag={removeNoOfMealsTag} checked={order.numberOfMeals === '2'}/>
                <TagCard name={'3'} addTag={addNoOfMealsTag} removeTag={removeNoOfMealsTag} checked={order.numberOfMeals === '3'}/>
                <TagCard name={'4'} addTag={addNoOfMealsTag} removeTag={removeNoOfMealsTag} checked={order.numberOfMeals === '4'}/>
                <TagCard name={'5'} addTag={addNoOfMealsTag} removeTag={removeNoOfMealsTag} checked={order.numberOfMeals === '5'}/>
                <TagCard name={'6'} addTag={addNoOfMealsTag} removeTag={removeNoOfMealsTag} checked={order.numberOfMeals === '6'}/>
            </div>
            </div>
            <div className="totalOrderContainer">
              <div className="totalOrderChosenPlan">{order.tags.join(', ')}</div>
              {order.numberOfMeals && order.numberOfPeople && <div className="totalOrderRecipes">{order.numberOfMeals} recepata u sedmici za {order.numberOfPeople} osoba</div>}
              <div className="totalOrderRecipes">{order.numberOfMeals*order.numberOfPeople} porcija ukupno</div>
              <div className="totalOrderPrice">Ukupna cijena: <b>{order.numberOfMeals*order.numberOfPeople*5}KM</b></div>
              <div className="totalOrderPriceDescription">1 porcija = 5KM</div>
            </div>
            <div className="planNextBtn" onClick={createPlan}>DALJE</div>
            {validationError && <p style={{color: 'red'}}>{validationError}</p>}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PlannerPlan