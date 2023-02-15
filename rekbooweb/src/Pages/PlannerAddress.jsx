import '../Styles/planneraddress.scss'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wizard from "../Components/Wizard"
import { addressDataValidation } from '../Utils/validations';
import jwt from 'jwt-decode'
import UsersService from '../Services/UsersService';

const PlannerAddress = () => {
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
        console.log(error);
      } else {
        const token = localStorage.getItem("token");
        const user = jwt(token);
        const response = await UsersService.addContactDataToUser(user.userID, inputs);
        if(response){
          //ovdje dobija response objekat user sa updatetovanim podacima
          //logic for adding data in order redux state
          navigate('/plannermeals');
        }
      }
    } catch (err) {
      setValidationError(true);
    }
  }
  
  return (
    <>
      <Header/>
      <Wizard level={4}/>
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
            <button className='addressBtn'>POTVRDI</button>
          </form>
          </div>
          <div className="addressOrderInformationContainer">
            <div className="orderInformationTitle">INFORMACIJE O NARUDŽBI</div>
            <div className="addressOrderContainer">
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitle">Gluten Free & Vegan</div>
                <div className="orderInformationItemPlan">3 recepta u sedmici za 2 osoba </div>
                <div className="orderInformationItemPrice">49,99KM</div>
              </div>
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitleInline">Dostava</div>
                <div className="orderInformationItemPrice">9,99KM</div>
              </div>
              <div className="orderInformationItemContainer">
                <div className="orderInformationItemTitleInline">Total</div>
                <div className="orderInformationItemPriceTotal">59,99KM</div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default PlannerAddress