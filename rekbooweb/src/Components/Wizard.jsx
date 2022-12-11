import WizardLine from "./WizardLine"
import '../Styles/wizard.scss'

const Wizard = () => {
  return (
    <>
        <div className="wizardContainer">
            <div className="wizardNav">
                <p className="wizardTitle">ODABERI PLAN</p>
                <WizardLine remNumber={9}/>
            </div>
            <div className="wizardNav">
                <p className="wizardTitle">REGISTRUJ SE</p>
                <WizardLine remNumber={9}/>
            </div>
            <div className="wizardNav">
                <p className="wizardTitle">UNESI PODATKE</p>
                <WizardLine remNumber={4.5}/>
            </div>
            <div className="wizardNav">
                <p className="wizardTitle">ODABERI JELA</p>
                <WizardLine remNumber={0}/>
            </div>
        </div>
    </>
  )
}

export default Wizard