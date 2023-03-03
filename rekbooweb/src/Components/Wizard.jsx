import '../Styles/wizard.scss'
import WizardLine from "./WizardLine"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updIsAuthenticated } from "../redux/actions/isAuthenticatedActions";

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
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                level >= 2 ?
                <div className="wizardNav">
                    {level === 2 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine remNumber={6.6}/>
                </div>:
                level >= 1 ?
                <div className="wizardNav">
                    {level === 1 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine remNumber={3.3}/>
                </div>:
                <div className="wizardNav">
                    {level === 0 ? 
                    <p className="wizardTitle wizardTitleSelected">PLAN</p>:
                    <p className="wizardTitle">PLAN</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }

            {//planner register
                !isAuthenticated ?
                level >= 5 ?
                <div className="wizardNav">
                    {level === 5 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                level >= 4 ?
                <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine remNumber={4.5}/>
                </div>:
                    <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRACIJA</p>:
                    <p className="wizardTitle">REGISTRACIJA</p>}
                    <WizardLine remNumber={0}/>
                </div>:<></>
            }

            {//planner address
                level >= 6 ?
                <div className="wizardNav">
                    {level === 6 ? 
                    <p className="wizardTitle wizardTitleSelected">KONTAKT</p>:
                    <p className="wizardTitle">KONTAKT</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                <div className="wizardNav">
                    {level === 6 ? 
                    <p className="wizardTitle wizardTitleSelected">KONTAKT</p>:
                    <p className="wizardTitle">KONTAKT</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }

            {//planner meals
                level >= 7 ?
                <div className="wizardNav">
                    {level === 7 ? 
                    <p className="wizardTitle wizardTitleSelected">JELA</p>:
                    <p className="wizardTitle">JELA</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                <div className="wizardNav">
                    {level === 7 ? 
                    <p className="wizardTitle wizardTitleSelected">JELA</p>:
                    <p className="wizardTitle">JELA</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }

            {//planner overview
                level >= 8 ?
                <div className="wizardNav">
                    {level === 8 ? 
                    <p className="wizardTitle wizardTitleSelected">NARUDŽBA</p>:
                    <p className="wizardTitle">NARUDŽBA</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                <div className="wizardNav">
                    {level === 8 ? 
                    <p className="wizardTitle wizardTitleSelected">NARUDŽBA</p>:
                    <p className="wizardTitle">NARUDŽBA</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }
        </div>
    </>
  )
}

export default Wizard