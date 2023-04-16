import '../Styles/planneroverview.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Wizard from '../Components/Wizard';
import Footer from '../Components/Footer';
import { getUser } from '../redux/actions/usersActions';
import PlannerOverviewAcceptModal from '../Components/PlannerOverviewAcceptModal';
import OrdersService from '../Services/OrdersService';
import { ClipLoader } from 'react-spinners';
import { updStep } from "../redux/actions/stepActions"

const PlannerOverview = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);  
  const step = useSelector(state => state.step);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const userData = useSelector(state => state.user);
  const {user, loading, error} = userData;  
  const navigate = useNavigate();
  const [postLoading, setPostLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const acceptOrder = async () => {
    setPostLoading(true);
    var response = await OrdersService.addOrder({
        numberOfPeople: order.numberOfPeople,
        numberOfRecipes: order.numberOfMeals,
        tags: order.tags,
        userID: order.userID,
        MealIDs: order.meals.map((m) => m.mealID)
    });

    if(response){
        setPostLoading(false);
        setShow(true);
    }
  }
  
  useEffect(() => {
    if((step === 4) && order !== null && isAuthenticated){
      dispatch(updStep(5));
      dispatch(getUser(order.userID));
    }else{
      navigate('/plannerplan');
    }
  }, []);
  return (
  <>
    <Header/>
    <Wizard level={8}/>
    <h2 className="plannerOverviewTitle">PREGLED NARUDŽBE</h2>

    <div className="plannerOverviewContainer">
        <div className="plannerOverviewPlanContainer">
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Plan: </p><div className="plannerOverviewPlanData">{order?.tags?.join(', ')}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Broj odabranih jela: </p><div className="plannerOverviewPlanData">{order?.numberOfMeals}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Broj osoba: </p><div className="plannerOverviewPlanData">{order?.numberOfPeople}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Ukupan broj porcija: </p><div className="plannerOverviewPlanData">{order?.numberOfMeals*order?.numberOfPeople}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Odabrana jela: </p>
                <div className="plannerOverviewPlanMealsContainer">
                    {
                        order?.meals.map((m, index) => <div key={index} className="plannerOverviewPlanMealName">- {m.name}</div>)
                    }
                </div>
            </div>
        </div>  

        <div className="plannerOverviewContactContainer">
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Ime i prezime: </p><div className="plannerOverviewPlanData">{user?.firstName} {user?.lastName}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Adresa: </p><div className="plannerOverviewPlanData">{user?.address}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Grad: </p><div className="plannerOverviewPlanData">{user?.city}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">E-mail: </p><div className="plannerOverviewPlanData">{user?.email}</div>
            </div>
            <div className="plannerOverviewPlanDataContainer">    
                <p className="plannerOverviewPlanLbl">Telefon: </p><div className="plannerOverviewPlanData">{user?.phone}</div>
            </div>
        </div>

    <div className="plannerOverviewContactContainer">
        <div className="plannerOverviewPlanDataContainer">    
            <p className="plannerOverviewPlanLbl">Cijena namirnica: </p><div className="plannerOverviewPlanData">{order?.numberOfMeals*order?.numberOfPeople*5}KM</div>
        </div>
        <div className="plannerOverviewPlanDataContainer">    
            <p className="plannerOverviewPlanLbl">Cijena dostave i pakovanja: </p><div className="plannerOverviewPlanData">10KM</div>
        </div>
        <div className="plannerOverviewPlanDataTotalPriceContainer">    
            <p className="plannerOverviewPlanLbl">Ukupna cijena: </p><div className="plannerOverviewPlanData">{order?.numberOfMeals*order?.numberOfPeople*5+10}KM</div>
        </div>
    </div>
    <div className="plannerOverviewOrderBtn" onClick={() => acceptOrder()}>{postLoading ? <ClipLoader color={'white'} size={15}/> : 'NARUČI'}</div>
    </div>


    {/* <Footer/> */}
    <PlannerOverviewAcceptModal show={show} handleClose={handleClose}/>
  </>
  )
}

export default PlannerOverview