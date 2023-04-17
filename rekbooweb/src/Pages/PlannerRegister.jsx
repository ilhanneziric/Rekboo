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
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader, ClipLoader } from 'react-spinners';
import { updStep } from "../redux/actions/stepActions"

const PlannerRegister = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);
  const step = useSelector(state => state.step);
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    role: 'User',
    terms: false
  });

  const [progress, setProgress] = useState(4);
  const [loading, setLoading] = useState(false);

  const [validationError, setValidationError] = useState(false);
  const [title, setTitle] = useState('RAČUN');
  const [validEmail, setValidEmail] = useState(null);

  const { email, password, passwordConfirmation, terms} = inputs;

  const onChange = e => {
    if(e.target.type === 'checkbox'){
      setInputs({...inputs, [e.target.name] : e.target.checked});    
    }else{
      setInputs({...inputs, [e.target.name] : e.target.value});        
    }       
  }

  const plannerLogin = async () =>{
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  const plannerRegister = async () => {
    setLoading(true);
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
      setLoading(false);
    } catch (err) {
      setValidationError(true);
    } finally {
      setLoading(false);
    }
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    if(validEmail == null){
      var { error } = emailValidation({email});
      if(error){
        setValidationError(true);
      } else {
        setLoading(true);
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
      setLoading(false);    
    }else if(validEmail){
      await plannerLogin();
    }else{
      await plannerRegister();
    }
  }
  
  useEffect(() => {
    if((step === 1 || step >= 2) && order !== null){
      if(isAuthenticated){
        if(step === 1 || step === 2){
          navigate('/planneraddress');
        }else if(step > 2){
          navigate('/plannerplan');
        }
      }else{
        dispatch(updStep(2));
      }
    }else{
      navigate('/plannerplan');
    }
  }, [isAuthenticated]);

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
            {validationError && <p className='err'>Imate grešku u unesenim vrijednostima!</p>}
            <label className="plannerRegisterFormLbl">E-mail:</label>
            {
              validEmail === null?
              <input className="plannerRegisterFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>:
              <input className="plannerRegisterFormInput" name="email" type="email" value={email} onChange={e => onChange(e)} disabled/>
            }
            {
              validEmail == false? (<>
              <label className="plannerRegisterFormLbl">Lozinka:</label>
              <input className="plannerRegisterFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              <label className="plannerRegisterFormLbl">Potvrdite lozinku:</label>
              <input className="plannerRegisterFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/>
              <input className="registerFormInputCheckbox" name="terms" type="checkbox" value={terms} onChange={e => onChange(e)}/>
              <label className="registerFormTermsLbl">Prihvatam <Link to='/'>uslove korištenja</Link>!</label>
              </>):
              validEmail == true?(<>
                <label className="plannerRegisterFormLbl">Lozinka:</label>
                <input className="plannerRegisterFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
              </>):
              (<></>)
            }
            <button className='plannerRegisterBtn'>{loading ? <ClipLoader color={'white'} size={15}/> : 'POTVRDI'}</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PlannerRegister