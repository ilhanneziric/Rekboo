import '../Styles/plannerregister.scss'
import Wizard from "../Components/Wizard"
import RegisterPhoto from '../Assets/registerPhoto.png';
import { useState } from "react";
import Footer from "../Components/Footer";

const PlannerRegister = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const [title, setTitle] = useState('RAČUN');
  const [validEmail, setValidEmail] = useState(false);

  const { email, password, passwordConfirmation} = inputs;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    if(email !== null || email !== undefined){
      setValidEmail(true);
      setTitle('REGISTRACIJA NOVOG RAČUNA');
    }
    
    console.log(inputs);
  } 
  return (
    <>
      <Wizard/>      
      <div>
        <h1 className="plannerRegisterTitle">{title}</h1>
        <div className="plannerRegisterContainer">
          <div className="plannerRegisterPhotoContainer">
            <img className="plannerRegisterPhoto" src={RegisterPhoto} alt="Register Photo" />
          </div>
          <form onSubmit={onSubmitForm} className="plannerRegisterForm">
            <label className="plannerRegisterFormLbl">UNESITE E-MAIL:</label>
            <input className="plannerRegisterFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>
            {
              validEmail && (<>
              <label className="plannerRegisterFormLbl">UNESITE ŠIFRU:</label>
              <input className="plannerRegisterFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              <label className="plannerRegisterFormLbl">PONOVO UNESITE ŠIFRU:</label>
              <input className="plannerRegisterFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/></>)
            }
            <button className='btn plannerRegisterBtn'>POTVRDI</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PlannerRegister