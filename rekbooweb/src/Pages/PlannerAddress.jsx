import { useState } from "react"
import Wizard from "../Components/Wizard"
import '../Styles/planneraddress.scss'


const PlannerAddress = () => {
  const [inputs, setInputs] = useState({
    FirstName: '',
    LastName: '',
    Address: '',
    City: '',
    Phone: '',
  });

  const { FirstName, LastName, Address, City, Phone} = inputs;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    
    console.log(inputs);
  }

  return (
    <>
      <Wizard/>
      <h2 className="addressTitle">UNESITE KONTAKT INFORMACIJE</h2>
      <div className="plannerAddressContainer">
          <div className="addressFormContainer">
          <form onSubmit={onSubmitForm} className="addressaddressForm">
            <label className="addressFormLbl">IME:</label>
            <input className="addressFormInput" name="FirstName" type="text" value={FirstName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">PREZIME:</label>
            <input className="addressFormInput" name="LastName" type="text" value={LastName} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">ADRESU:</label>
            <input className="addressFormInput" name="Address" type="text" value={Address} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">GRAD:</label>
            <input className="addressFormInput" name="City" type="text" value={City} onChange={e => onChange(e)}/>
            <label className="addressFormLbl">TELEFON:</label>
            <input className="addressFormInput" name="Phone" type="text" value={Phone} onChange={e => onChange(e)}/>
            <button className='btn addressBtn'>POTVRDI</button>
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
    </>
  )
}

export default PlannerAddress