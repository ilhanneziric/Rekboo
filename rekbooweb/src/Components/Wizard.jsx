import WizardLine from "./WizardLine"
import '../Styles/wizard.scss'

const Wizard = ({level}) => {
  return (
    <>
        <div className="wizardContainer">
            {
                level > 1 &&
                <div className="wizardNav">
                    <p className="wizardTitle">ODABERI PLAN</p>
                    <WizardLine remNumber={4.5}/>
                </div>
            }

            {
                level > 2 &&
                <div className="wizardNav">
                    <p className="wizardTitle">ODABERI PLAN</p>
                    <WizardLine remNumber={9}/>
                </div>
            }

            {
                level > 3
            }

            {
                level > 4
            }

            {
                level > 5
            }
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