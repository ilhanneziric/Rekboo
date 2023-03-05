import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updStep } from '../redux/actions/stepActions';

const PlannerOverviewAcceptModal = ({show, handleClose}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = () => {
    handleClose();
    dispatch(updStep(0));
    navigate('/');
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered={true} dialogClassName="modal-sm">
        <Modal.Header>
            <Modal.Title><div className='plannerOverviewAcceptModalTitle'>OBAVIJEST O POTVRDI NARUDŽBE</div></Modal.Title>
        </Modal.Header>
        <div className='plannerOverviewAcceptBody'>
          Uspješno ste izvršili narudžbu sedmičnog plana prehrane.
        </div>
        <Modal.Footer>
            <div onClick={submit} className='plannerOverviewAcceptModalBtn'>U REDU</div>
        </Modal.Footer>
      </Modal>``
    </>
  )
}

export default PlannerOverviewAcceptModal