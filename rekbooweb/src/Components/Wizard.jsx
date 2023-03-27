import '../Styles/wizard.scss'
import WizardLine from "./WizardLine"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updIsAuthenticated } from "../redux/actions/isAuthenticatedActions";
import { Link } from 'react-router-dom';

const Wizard = ({level}) => {
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  
  useEffect(() => {
    dispatch(updIsAuthenticated());
  }, []);

  return (
    <>
        <div className="wizardContainer">
            {//planner plan
                level >= 3 ?
                <div className="wizardNav">
                    {level === 3 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <Link to='/plannerplan'><p className="wizardTitle wizardTitleLink">PLAN</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                level >= 2 ?
                <div className="wizardNav">
                    {level === 2 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine widthPercent={66}/>
                </div>:
                level >= 1 ?
                <div className="wizardNav">
                    {level === 1 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine widthPercent={33}/>
                </div>:
                <div className="wizardNav">
                    {level === 0 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine widthPercent={0}/>
                </div>
            }

            {/* {//planner register
                !isAuthenticated ?
                level >= 5 ?
                <div className="wizardNav">
                    {level === 5 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <Link to='/plannerregister'><p className="wizardTitle wizardTitleLink">REGISTRACIJA</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                level >= 4 ?
                <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine widthPercent={50}/>
                </div>:
                    <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine widthPercent={0}/>
                </div>:<></>
            } */}

            {//planner register
                level >= 5 ?
                <div className="wizardNav">
                    {level === 5 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <Link to='/plannerregister'><p className="wizardTitle wizardTitleLink">REGISTRACIJA</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                level >= 4 ?
                <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine widthPercent={50}/>
                </div>:
                    <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine widthPercent={0}/>
                </div>
            }

            {//planner address
                level >= 6 ?
                <div className="wizardNav">
                    {level === 6 ? 
                    <p className="wizardTitle wizardTitleSelected">KONTAKT</p>:
                    <Link to='/planneraddress'><p className="wizardTitle wizardTitleLink">KONTAKT</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                <div className="wizardNav">
                    {level === 6 ? 
                    <p className="wizardTitle wizardTitleSelected">KONTAKT</p>:
                    <p className="wizardTitle">KONTAKT</p>}
                    <WizardLine widthPercent={0}/>
                </div>
            }

            {//planner meals
                level >= 7 ?
                <div className="wizardNav">
                    {level === 7 ? 
                    <p className="wizardTitle wizardTitleSelected">JELA</p>:
                    <Link to='/plannermeals'><p className="wizardTitle wizardTitleLink">JELA</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                <div className="wizardNav">
                    {level === 7 ? 
                    <p className="wizardTitle wizardTitleSelected">JELA</p>:
                    <p className="wizardTitle">JELA</p>}
                    <WizardLine widthPercent={0}/>
                </div>
            }

            {//planner overview
                level >= 8 ?
                <div className="wizardNav">
                    {level === 8 ? 
                    <p className="wizardTitle wizardTitleSelected">NARUDŽBA</p>:
                    <Link to='/planneroverview'><p className="wizardTitle wizardTitleLink">NARUDŽBA</p></Link>}
                    <WizardLine widthPercent={100}/>
                </div>:
                <div className="wizardNav">
                    {level === 8 ? 
                    <p className="wizardTitle wizardTitleSelected">NARUDŽBA</p>:
                    <p className="wizardTitle">NARUDŽBA</p>}
                    <WizardLine widthPercent={0}/>
                </div>
            }
        </div>
    </>
  )
}

export default Wizard