import MealCard from "../Components/MealCard"
import Wizard from "../Components/Wizard"
import '../Styles/plannermeals.scss'
import { Modal } from 'react-bootstrap'
import { useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const PlannerMeals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Header/>
      <Wizard level={5}/>
      <h2 className="registerTitle">ODABERITE 3 JELA</h2>
      <div className="plannerMealsContainer">
        <MealCard setShown={setShow}/>
        <MealCard setShown={setShow}/>
        <MealCard setShown={setShow}/>
      </div>

      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header>
            <Modal.Title>Ovo je naslov</Modal.Title>
        </Modal.Header>
        <div className="modalBody">
          Ovo je body
        </div>
        <Modal.Footer className="modalFooter">
            <div className="usermodalbtn" onClick={() => setShow(false)}>OK</div>
        </Modal.Footer>
      </Modal>
      <Footer/>
    </>
  )
}

export default PlannerMeals