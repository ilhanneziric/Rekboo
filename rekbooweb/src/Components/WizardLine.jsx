import '../Styles/wizardLine.scss'

const WizardLine = ({widthPercent}) => {
  return (
    <div className="wizardLineContainer">
        <div className="wizardLineBack"></div>
        <div className="wizardLineFront" style={{width: `${widthPercent}%`}}></div>
    </div>
  )
}

export default WizardLine