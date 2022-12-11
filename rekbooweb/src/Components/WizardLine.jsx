import '../Styles/wizardLine.scss'

const WizardLine = ({remNumber}) => {
  return (
    <div className="wizardLineContainer">
        <div className="wizardLineBack"></div>
        <div className="wizardLineFront" style={{width: `${remNumber}rem`}}></div>
    </div>
  )
}

export default WizardLine