import '../Styles/plannerregister.scss'
import Wizard from "../Components/Wizard"
import RegisterPhoto from '../Assets/registerPhoto.png';
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import UsersService from '../Services/UsersService';
import { useDispatch, useSelector } from 'react-redux';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { loginValidation, registerValidation, emailValidation } from '../Utils/validations';
import { useNavigate } from 'react-router-dom';

const PlannerRegister = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    role: 'User'
  });

  const [progress, setProgress] = useState(4);

  const [validationError, setValidationError] = useState(false);
  const [title, setTitle] = useState('RAČUN');
  const [validEmail, setValidEmail] = useState(null);

  const { email, password, passwordConfirmation} = inputs;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const plannerLogin = async () =>{
    try{
      var { error } = loginValidation({email, password});
      if(error){
        setValidationError(true);
      } else {
        const response = await UsersService.login(inputs);
        if(response){
            localStorage.setItem('token', response);
        } else {
          localStorage.removeItem('token');
          setValidationError(true);
        }
        dispatch(updIsAuthenticated());
      }
    } catch (err) {
      localStorage.removeItem('token')
      dispatch(updIsAuthenticated());
      setValidationError(true);
    }
  }

  const plannerRegister = async () => {
    try{
      var { error } = registerValidation(inputs);
      if(error){
        setValidationError(true);
      } else {
        const response = await UsersService.register(inputs);
        if(response){
          await plannerLogin();
        } else {
          setValidationError(true);
        }
      }
    } catch (err) {
      setValidationError(true);
    }
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    if(validEmail == null){
      var { error } = emailValidation({email});
      if(error){
        setValidationError(true);
      } else {
        var exist = await UsersService.existUser(email);
        if(exist){
          setTitle('PRIJAVA RAČUNA');
          setValidEmail(true);
        } else if(!exist){
          setTitle('REGISTRACIJA NOVOG RAČUNA');
          setValidEmail(false);
        }
        setProgress(5);    
      }
    }else if(validEmail){
      await plannerLogin();
    }else{
      await plannerRegister();
    }
  } 

  useEffect(() => {
    if(order === null){
      navigate('/plannerplan');
    }
  }, []);
  
  return (
    <>
      <Header/>
      <Wizard level={progress}/>      
      <div>
        <h2 className="plannerRegisterTitle">{title}</h2>
        <div className="plannerRegisterContainer">
          <div className="plannerRegisterPhotoContainer">
            <img className="plannerRegisterPhoto" src={RegisterPhoto} alt="Register Photo" />
          </div>
          <form onSubmit={onSubmitForm} className="plannerRegisterForm">
            {validationError && <p style={{color: 'red'}}>Imate grešku u unesenim vrijednostima!</p>}
            <label className="plannerRegisterFormLbl">UNESITE E-MAIL:</label>
            {
              validEmail === null?
              <input className="plannerRegisterFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>:
              <input className="plannerRegisterFormInput" name="email" type="email" value={email} onChange={e => onChange(e)} disabled/>
            }
            {
              validEmail == false? (<>
              <label className="plannerRegisterFormLbl">UNESITE ŠIFRU:</label>
              <input className="plannerRegisterFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              <label className="plannerRegisterFormLbl">PONOVO UNESITE ŠIFRU:</label>
              <input className="plannerRegisterFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/></>):
              validEmail == true?(<>
                <label className="plannerRegisterFormLbl">UNESITE ŠIFRU:</label>
                <input className="plannerRegisterFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              </>):
              (<></>)
            }
            <button className='plannerRegisterBtn'>POTVRDI</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PlannerRegister