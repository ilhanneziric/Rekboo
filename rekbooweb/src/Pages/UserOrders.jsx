import '../Styles/userorders.scss'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UserOrder from '../Components/UserOrder';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/ordersActions';
import { useEffect } from 'react';
import { updStep } from "../redux/actions/stepActions"
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const UserOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ordersData = useSelector(state => state.orders);
  const {orders, loading, error} = ordersData;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token === null){
        navigate('/');
    }else{
        const user = jwt(token);
        dispatch(getUserOrders(user.userID));
        dispatch(updStep(0));
    }
  }, []);

  const override = {
    // position: 'absolute',
    zIndex: '1',
    top: '50%',
    left: '50%',
    marginTop: '100px'
  };
  return (
    <>
    <Header/>
    <div className="userOrdersContainer">
        <h1 className="userOrdersTitle">MOJE NARUDŽBE</h1>
        {
            loading ? <HashLoader color={"#59de09"} cssOverride={override}/> : 
              orders?.length === 0 ?
                <><br /><p className="userOrdersTitle">NEMATE OSTVARENIH NARUDŽBI!</p></>:
                orders?.map((o, index) => <UserOrder order={o} key={index}/>)
        }
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default UserOrders