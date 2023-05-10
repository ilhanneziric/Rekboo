import '../Styles/planneraddress.scss'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wizard from "../Components/Wizard"
import { addressDataValidation } from '../Utils/validations';
import jwt from 'jwt-decode'
import UsersService from '../Services/UsersService';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from "../redux/actions/orderActions"
import { ClipLoader } from 'react-spinners';
import { updStep } from "../redux/actions/stepActions"

const PlannerAddress = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);
  const step = useSelector(state => state.step);
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
  });

  const [validationError, setValidationError] = useState(false);

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    try{
      var { error } = addressDataValidation(inputs);
      if(error){
        setValidationError(error.toString().substring(16));
      } else {
        const token = localStorage.getItem("token");
        const user = jwt(token);
        setLoading(true);
        const response = await UsersService.addContactDataToUser(user.userID, inputs);
        if(response){
          dispatch(updateOrder({...order, userID: response.userID}));
          setLoading(false);
          navigate('/plannermeals');
        }
      }
    } catch (err) {
      setValidationError(true);
    }
  }

  useEffect(() => {
    if((step === 1 || step === 2 || step >= 3) && order !== null && isAuthenticated){
      dispatch(updStep(3));
    }else{
      navigate('/plannerplan');
    }
  }, []);

  return (
    <>
      <Header/>
      <Wizard level={6}/>
      <h2 className="plannerAddressTitle">UNESITE KONTAKT INFORMACIJE</h2>
      <div className="plannerAddressContainer">
          <div className="addressFormContainer">
          <form onSubmit={onSubmitForm} className="addressForm">
            {validationError && <p className="err">{validationError}</p>}
            <label className="addressFormLbl">Ime:</label>
            <input className="addressFormInput" name="firstName" type="text" value={inputs.firstName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">Prezime:</label>
            <input className="addressFormInput" name="lastName" type="text" value={inputs.lastName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">Adresa:</label>
            <input className="addressFormInput" name="address" type="text" value={inputs.address} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">Grad:</label>
            <input className="addressFormInput" name="city" type="text" value={inputs.city} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">Telefon:</label>
            <input className="addressFormInput" name="phone" type="text" value={inputs.phone} onChange={e => onChange(e)}/>
            <button className='addressBtn'>{loading ? <ClipLoader color={'white'} size={15}/> : 'POTVRDI'}</button>
          </form>
          </div>
          {/* <div className="addressOrderInformationContainer">
            <div className="orderInformationTitle">INFORMACIJE O NARUDŽBI</div>
            <div className="addressOrderContainer">
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitle">{order.tags.join(', ')}</div>
                <div className="orderInformationItemPlan">{order.numberOfMeals} recepata u sedmici za {order.numberOfPeople} osoba</div>
                <div className="orderInformationItemPrice">{order.numberOfMeals*order.numberOfPeople*5}KM</div>
              </div>
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitleInline">Dostava</div>
                <div className="orderInformationItemPrice">5KM</div>
              </div>
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitleInline">Total</div>
                <div className="orderInformationItemPriceTotal">{order.numberOfMeals*order.numberOfPeople*5+5}KM</div>
              </div>
            </div>
          </div> */}
        </div>
    </>
  )
}

export default PlannerAddress