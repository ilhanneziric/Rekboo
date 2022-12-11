import Stepper from '../Assets/stepbystep.png'
import '../Styles/footer.scss'

const Footer = () => {
  return (
    <>
        <div className="stepperContainer">
            <img className="stepper" src={Stepper} alt="step by step" />
        </div>
    </>
  )
}

export default Footer