import WizardLine from "./WizardLine"
import '../Styles/wizard.scss'

const Wizard = ({level}) => {
  return (
    <>
        <div className="wizardContainer">
            {
                level > 2 ?
                <div className="wizardNav">
                    {level === 2 ? 
                    <p className="wizardTitle wizardTitleSelected">ODABERI PLAN</p>:
                    <p className="wizardTitle">ODABERI PLAN</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                level > 1 ?
                <div className="wizardNav">
                    {level === 1 ? 
                    <p className="wizardTitle wizardTitleSelected">ODABERI PLAN</p>:
                    <p className="wizardTitle">ODABERI PLAN</p>}
                    <WizardLine remNumber={4.5}/>
                </div>:
                <div className="wizardNav">
                    {level === 1 ? 
                    <p className="wizardTitle wizardTitleSelected">ODABERI PLAN</p>:
                    <p className="wizardTitle">ODABERI PLAN</p>}
                    <WizardLine remNumber={0}/>
                </div>
            
            }

            {
                level > 3 ?
                <div className="wizardNav">
                    {level === 3 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRUJ SE</p>:
                    <p className="wizardTitle">REGISTRUJ SE</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                    <div className="wizardNav">
                    {level === 3 ? 
                    <p className="wizardTitle wizardTitleSelected">REGISTRUJ SE</p>:
                    <p className="wizardTitle">REGISTRUJ SE</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }

            {
                level > 4 ?
                <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">UNESI PODATKE</p>:
                    <p className="wizardTitle">UNESI PODATKE</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                <div className="wizardNav">
                    {level === 4 ? 
                    <p className="wizardTitle wizardTitleSelected">UNESI PODATKE</p>:
                    <p className="wizardTitle">UNESI PODATKE</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }

            {
                level > 5 ?
                <div className="wizardNav">
                    {level === 5 ? 
                    <p className="wizardTitle wizardTitleSelected">ODABERI JELA</p>:
                    <p className="wizardTitle">ODABERI JELA</p>}
                    <WizardLine remNumber={9}/>
                </div>:
                <div className="wizardNav">
                    {level === 5 ? 
                    <p className="wizardTitle wizardTitleSelected">ODABERI JELA</p>:
                    <p className="wizardTitle">ODABERI JELA</p>}
                    <WizardLine remNumber={0}/>
                </div>
            }
        </div>
    </>
  )
}

export default Wizard