import Wizard from "../Components/Wizard"
import '../Styles/plannerregister.scss'
import RegisterPhoto from '../Icons/registerPhoto.png';
import { useState } from "react";

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
        <h1 className="registerTitle">{title}</h1>
        <div className="plannerRegisterContainer">
          <div className="registerPhotoContainer">
            <img className="registerPhoto" src={RegisterPhoto} alt="Register Photo" />
          </div>
          <form onSubmit={onSubmitForm} className="registerForm">
            <label className="registerFormLbl">UNESITE E-MAIL:</label>
            <input className="registerFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>
            {
              validEmail && (<>
              <label className="registerFormLbl">UNESITE ŠIFRA:</label>
              <input className="registerFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              <label className="registerFormLbl">PONOVO UNESITE ŠIFRU:</label>
              <input className="registerFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/></>)
            }
            <button className='btn registerBtn'>POTVRDI</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PlannerRegister