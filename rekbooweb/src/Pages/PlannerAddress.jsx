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
    FirstName: '',
    LastName: '',
    Address: '',
    City: '',
    Phone: '',
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
        setValidationError(true);
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
    console.log('address');
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
      <h2 className="addressTitle">UNESITE KONTAKT INFORMACIJE</h2>
      <div className="plannerAddressContainer">
          <div className="addressFormContainer">
          <form onSubmit={onSubmitForm} className="addressaddressForm">
            {validationError && <p style={{color: 'red'}}>Imate grešku u unesenim vrijednostima!</p>}
            <label className="addressFormLbl">IME:</label>
            <input className="addressFormInput" name="FirstName" type="text" value={inputs.FirstName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">PREZIME:</label>
            <input className="addressFormInput" name="LastName" type="text" value={inputs.LastName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">ADRESU:</label>
            <input className="addressFormInput" name="Address" type="text" value={inputs.Address} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">GRAD:</label>
            <input className="addressFormInput" name="City" type="text" value={inputs.City} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">TELEFON:</label>
            <input className="addressFormInput" name="Phone" type="text" value={inputs.Phone} onChange={e => onChange(e)}/>
            <button className='addressBtn'>POTVRDI   {loading && <ClipLoader color={'white'} size={10}/>}</button>
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
        <Footer/>
    </>
  )
}

export default PlannerAddress