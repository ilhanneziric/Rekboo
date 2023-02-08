import { Modal } from 'react-bootstrap'

const PlannerMealsModal = ({show, handleClose, meal = null}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header>
            <Modal.Title>{meal.name}</Modal.Title>
        </Modal.Header>
        <div>
            {meal.description}
        </div>
        <Modal.Footer>
            <div onClick={handleClose}>OK</div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PlannerMealsModal