import '../Styles/howitworks.scss'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import Stepper from '../Assets/stepbystep.png'

const HowItWorks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      {window.location.pathname === '/howitworks' && <Header/>}
      <div className={window.location.pathname !== '/howitworks' ? "howItWorksContainer2" : "howItWorksContainer"}>
        <div className="stepperContainer">
            <img className="stepper" src={Stepper} alt="step by step" />
        </div>

        <div className="howItWorksItemContainer">
          <div className="howItWorksItem">
            <b>1. Prilagodi svoj plan ishrane</b><br /> Uživaj u savršeno prilagodjenom planu ishrane za sebe i svoje kućanstvo, bez ograničenja! Fleksibilan je i prilagođava se tvom 
            životnom stilu. Želiš promijeniti plan ili otkazati? Nema problema.
          </div>
          <div className="howItWorksItem">
            <b>2. Izaberi obroke</b><br /> Izaberi omiljena jela ili probaj nove kulture. Tradicionali bosanske, talijanske, azijske kuhinje i drugih samo su dio našeg bogatog asortimana.
          </div>
          <div className="howItWorksItem howItWorksItemBreak">
            <b>3. Dostavljamo na tvoja vrata</b><br /> Klikni "naruči" i mi dostavljamo ukupan set obroka sa svježim namirnicama za spremanje tvojih obroka.
          </div>
          <div className="howItWorksItem">
            <b>4. Kuhaj i uživaj</b><br /> Okusi čari kuhanja kod kuće uz pomoć naših detaljnih recepata koji dolaze uz svaki set. Prijatno!
          </div>
        </div>
      </div>
      <Footer/>
    </>  
  )
}

export default HowItWorks