import '../Styles/register.scss'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UsersService from "../Services/UsersService";
import { registerValidation } from "../Utils/validations";
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { ClipLoader } from 'react-spinners';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
        role: 'User',
        terms: false
    });
    const [loading, setLoading] = useState(false);

    const [validationError, setValidationError] = useState(null);
    
    const { email, password, passwordConfirmation, terms} = inputs;

    const onChange = e => {
      if(e.target.type === 'checkbox'){
        setInputs({...inputs, [e.target.name] : e.target.checked});    
      }else{
        setInputs({...inputs, [e.target.name] : e.target.value});        
      }
    }

    const onSubmitForm = async e => {
      setLoading(true);
      e.preventDefault();    
      try {
        var { error } = registerValidation(inputs);
        if(error){
          setValidationError(error.toString().substring(16));
        }else{
          const response = await UsersService.register(inputs);
          if(response){
              navigate('/login');
          }else{
            setValidationError("Greška na serveru!");
          }
        } 
        setLoading(false);
      } catch (err) {
        setValidationError("Greška na serveru!");
        setLoading(false);
      }
    } 
    
    useEffect(() => {
      dispatch(updStep(0));
    }, []);
  return (
    <>
        <Header/>
        <div className="registerContainerAll">
        <h1 className="registerTitle">REGISTRACIJA NOVOG RAČUNA</h1>
        <div className="registerContainer">
            <form onSubmit={onSubmitForm} className="registerForm">
                {validationError && <p className='err'>{validationError}</p>}
                <label className="registerFormLbl">E-mail:</label>
                <input className="registerFormInput" name="email" value={email} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">Lozinka:</label>
                <input className="registerFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">Potvrdite lozinku:</label>
                <input className="registerFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/>
                <input className="registerFormInputCheckbox" name="terms" type="checkbox" value={terms} onChange={e => onChange(e)}/>
                <label className="registerFormTermsLbl">Prihvatam <Link to='/'>uslove korištenja</Link>!</label>
                <button className={inputs.terms ? 'registerBtn' : 'registerBtnDisabled'}>{loading ? <ClipLoader color={'white'} size={15}/> : 'POTVRDI'}</button>
                <div className='registerLoginInfo'>Imate otvoren račun? <Link to='/login'>Prijavi se</Link>.</div>
            </form>
        </div>
        </div>
    </>
    
  )
}

export default Register