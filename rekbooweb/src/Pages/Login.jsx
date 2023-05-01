import '../Styles/login.scss'
import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { loginValidation } from '../Utils/validations';
import { useDispatch } from "react-redux";
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { Link } from "react-router-dom";
import UsersService from "../Services/UsersService";
import { updStep } from '../redux/actions/stepActions';
import { useEffect } from "react";
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
      email: '',
      password: ''
  });
  const [loading, setLoading] = useState(null);

  const [validationError, setValidationError] = useState(false);
  
  const { email, password} = inputs;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const onSubmitForm = async e => {
      setLoading(true);
      e.preventDefault();    
      try {
        var { error } = loginValidation(inputs);
        if(error){
          setValidationError(error.toString().substring(16));
        }else{
          const response = await UsersService.login(inputs);
          if(response){
            localStorage.setItem('token', response);
          }else{  
            localStorage.removeItem('token')
            setValidationError("Netačna lozinka ili email!");
          } 
          dispatch(updIsAuthenticated());
        } 
        setLoading(false);
      } catch (err) {
        localStorage.removeItem('token') 
        setValidationError("Greška na serveru!");
        dispatch(updIsAuthenticated());
        setLoading(false);
      }
  } 

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
      <div className="loginContainerAll">
        {window.location.pathname === '/adminlogin' ? <h1 className="loginTitle">PRIJAVA NA ADMIN RAČUN</h1> : <h1 className="loginTitle">PRIJAVA NA RAČUN</h1>}
        <div className="loginContainer">
          <form onSubmit={onSubmitForm} className="loginForm">
            {validationError && <p className="err">{validationError}</p>}
            <label className="loginFormLbl">E-mail:</label>
            <input className="loginFormInput" name="email" type="email" required value={email} onChange={e => onChange(e)}/>
            <label className="loginFormLbl">Lozinka:</label>
            <input className="loginFormInput" name="password" type="password"value={password} onChange={e => onChange(e)}/>
            <button className='loginBtn'>{loading ? <ClipLoader color={'white'} size={15}/> : 'POTVRDI'}</button>
            <div className='loginRegisterInfo'>Nemate otvoren račun? Otvori novi <Link to='/register'>račun</Link>.</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login