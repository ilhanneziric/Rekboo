import '../Styles/plannerplan.scss'
import Wizard from "../Components/Wizard"
import TagCard from '../Components/TagCard'

import Vegan from '../Assets/vegan.svg';
import VeganChecked from '../Assets/veganChecked.svg';
import Halal from '../Assets/halal.png';
import HalalChecked from '../Assets/halalChecked.png';
import { Link } from 'react-router-dom';

// import {Vegan, VeganChecked} from '../Utils/PlanIconsContainer';

const PlannerPlan = () => {
  return (
    <>
      <Wizard level={1}/>      
      <div>
        <h2 className="planTitle">ODABERITE SVOJ PLAN</h2>
        <div className="plannerPlanContainer">
          <div className="planLeftContainer">
          <TagCard icon={Vegan} iconChecked={VeganChecked} name={'Vegan'} checked={false}/>
          <TagCard icon={Vegan} iconChecked={VeganChecked} name={'Vegan'} checked={true}/>
          <TagCard icon={Vegan} iconChecked={VeganChecked} name={'Vegan'} checked={false}/>
          <TagCard icon={Vegan} iconChecked={VeganChecked} name={'Vegan'} checked={false}/>
          <TagCard icon={Halal} iconChecked={HalalChecked} name={'Halal'} checked={false}/>
          <TagCard icon={Halal} iconChecked={HalalChecked} name={'Halal'} checked={true}/>
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
            <Link to='/plannerregister'><div className="planNextBtn">DALJE</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlannerPlan