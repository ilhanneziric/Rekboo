import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders} from '../redux/actions/ordersActions'
import HashLoader from "react-spinners/HashLoader";
import AdminOrdersModal from '../Components/AdminOrdersModal'

const AdminOrdersTable = () => {
    const dispatch = useDispatch();
    const ordersData = useSelector(state => state.orders);
    const {orders, loading, error} = ordersData;
  
    const [order, setOrder] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
    const openModal = (m) => {
      setOrder(m);
      setShow(true);
    }
  
    useEffect(() => {
      dispatch(getOrders());
    },[dispatch]);
  
    const override = {
      position: 'absolute',
      zIndex: '1',
      top: '50%',
      left: '50%'
    };

  return (
    <>
    {
      loading&&<HashLoader color={"#59de09"} cssOverride={override}/>
    }
    <table className="table text-center">
      <thead>
          <tr>
              <th>ID</th>
              <th>Plan</th>
              <th>Naručioc</th>
              <th>Broj jela</th>
              <th>Broj osoba</th>
              <th>Detalji</th>
          </tr>
      </thead>
      <tbody>
          {            
              orders?.map((p, index) => (<tr key={index}>
                  <td>{p.plannerID}</td>
                  <td>
                    {p?.tags?.join(', ')}
                  </td>
                  <td>
                    {p.user.firstName} {p.user.lastName}
                  </td>
                  <td>{p.numberOfRecipes}</td>
                  <td>{p.numberOfPeople}</td>
                  <td><div className="editBtn" onClick={(e) => openModal(p)}>DETALJI</div></td>
              </tr>))
            }
        </tbody>
    </table>
    <AdminOrdersModal show={show} handleClose={handleClose} order={order}/>
    </>
  )
}

export default AdminOrdersTable