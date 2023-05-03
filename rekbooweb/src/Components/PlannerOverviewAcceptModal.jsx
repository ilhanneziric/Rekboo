import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateOrder } from '../redux/actions/orderActions';
import { updStep } from '../redux/actions/stepActions';

const PlannerOverviewAcceptModal = ({show, handleClose}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = () => {
    handleClose();
    dispatch(updStep(0));
    dispatch(updateOrder(null));
    navigate('/');
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered={true} dialogClassName="modal-sm">
        <Modal.Header>
            <Modal.Title><div className='plannerOverviewAcceptModalTitle'>USPJEŠNA NARUDŽBA</div></Modal.Title>
        </Modal.Header>
        <div className='plannerOverviewAcceptBody'>
          <span> Hvala što si dio <b>Rekboo Beta testinga</b>!  </span>
          Dobićeš email za potvrdu narudžbe.
        </div>
        <Modal.Footer>
            <div onClick={submit} className='plannerOverviewAcceptModalBtn'>U REDU</div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PlannerOverviewAcceptModal