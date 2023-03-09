import { useEffect } from "react";
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { getUserOrders } from "../redux/actions/ordersActions";
import UserOrder from './UserOrder';

const AdminUserOrdersModal = ({show, handleClose, user = null}) => {
  const dispatch = useDispatch();
  const userOrdersData = useSelector(state => state.orders);
  const {orders, loading, error} = userOrdersData;

  useEffect(() => {
    if(user !== null){
        dispatch(getUserOrders(user?.userID));
    }
  }, [user]);

  const override = {
    // position: 'absolute',
    zIndex: '1',
    top: '50%',
    left: '50%',
    marginTop: '100px'
  };
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
            <Modal.Header>
                <Modal.Title>Narudžbe od {user?.firstName} {user?.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {    
                    loading ? <HashLoader color={"#59de09"} cssOverride={override}/> : 
                    orders?.map((o, index) => <UserOrder order={o} key={index}/>)
                }
            </Modal.Body>
            <Modal.Footer>
                <div className="activeBtnModal" onClick={handleClose}>U REDU</div>
            </Modal.Footer>
        </Modal>
  )
}

export default AdminUserOrdersModal