import '../Styles/plannerplan.scss'
import Wizard from "../Components/Wizard"
import TagCard from '../Components/TagCard'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { useDispatch } from 'react-redux';
import { updateOrder } from "../redux/actions/orderActions"
import { useState } from 'react';


const PlannerPlan = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    numberOfMeals: 2,
    numberOfPeople: 2,
    tags: []
  })

  const navigate = useNavigate();
  
  const createPlan = () => {
    console.log(order);
    // dispatch(updateOrder(order));
    // navigate('/plannerrkegister');
  }

  const addTag = (tag) => {
    setOrder(prevState => ({
      ...prevState,
      tags: [...prevState.tags, tag]
    }));
    console.log(order);
  }

  const removeTag = (tag) => {
    setOrder({...order, tags: order.tags.filter(str => str !== tag)})
    console.log(order);
  }

  return (
    <>
      <Header/>
      <Wizard level={1}/>      
      <div>
        <h2 className="planTitle">ODABERITE SVOJ PLAN</h2>
        <div className="plannerPlanContainer">
          <div className="planLeftContainer">
            <h4 className="noOfTitle">KATEGORIJE:</h4>{/*HARDCODED | TODO -> ADD TAGS IN CACHE*/}
            <TagCard name={'MODERNO'} addTag={addTag} removeTag={removeTag} checked={order.tags?.includes('MODERNO') === true}/>
            <TagCard name={'ZDRAVO'} addTag={addTag} removeTag={removeTag} checked={order.tags?.includes('ZDRAVO') === true}/>
            <TagCard name={'AZIJSKO'} addTag={addTag} removeTag={removeTag} checked={order.tags?.includes('AZIJSKO') === true}/>
            <TagCard name={'TRADICIONALNO'} addTag={addTag} removeTag={removeTag} checked={order.tags?.includes('TRADICIONALNO') === true}/>
            <TagCard name={'MEDITERANSKO'} addTag={addTag} removeTag={removeTag} checked={order.tags?.includes('MEDITERANSKO') === true}/>
          </div>
          <div className="planRightContainer">
            <div className="noOfContainers">
              <h4 className="noOfTitle">BROJ OSOBA:</h4>
              <div className="noOfCardContainer">
                <div className="noOfCard">2</div>
                <div className="noOfCard">4</div>
              </div>
            </div>
            <div className="noOfContainers">
              <h4 className="noOfTitle">BROJ RECEPATA SEDMIČNO:</h4>
              <div className="noOfCardContainer">
                <div className="noOfCard">2</div>
                <div className="noOfCard">3</div>
                <div className="noOfCard">4</div>
                <div className="noOfCard">5</div>
                <div className="noOfCard">6</div>
              </div>
            </div>
            <div className="totalOrderContainer">
              <div className="totalOrderChosenPlan">Gluten free & Vegan plan</div>
              <div className="totalOrderRecipes">3 recepta u sedmici za 2 osobe</div>
              <div className="totalOrderRecipes">6 porcija ukupno</div>
              <div className="totalOrderPrice">Ukupna cijana: <b>60KM</b></div>
            </div>
            <div className="planNextBtn" onClick={createPlan}>DALJE</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PlannerPlan