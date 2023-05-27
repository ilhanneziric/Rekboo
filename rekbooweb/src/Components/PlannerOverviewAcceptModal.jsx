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
          Hvala Vam što ste probali našu uslugu! Nažalost naš servis još uvijek nije dostupan, ali radimo naporno da Rekboo okuse donesemo i na Vaša vrata. Stay tuned! 
        </div>
        <Modal.Footer>
            <div onClick={submit} className='plannerOverviewAcceptModalBtn'>U REDU</div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PlannerOverviewAcceptModal