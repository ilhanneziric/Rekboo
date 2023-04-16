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

const Login = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
      email: '',
      password: ''
  });

  const [validationError, setValidationError] = useState(false);
  
  const { email, password} = inputs;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});        
  }

  const onSubmitForm = async e => {
      e.preventDefault();    
      try {
        var { error } = loginValidation(inputs);
        if(error){
          setValidationError(true);
        }else{
          const response = await UsersService.login(inputs);
          if(response){
            localStorage.setItem('token', response);
          }else{  
            localStorage.removeItem('token')
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
            {validationError && <p style={{color: 'red'}}>Pogrešan email ili lozinka!</p>}
            <label className="loginFormLbl">E-mail:</label>
            <input className="loginFormInput" name="email" type="email" required value={email} onChange={e => onChange(e)}/>
            <label className="loginFormLbl">Lozinka:</label>
            <input className="loginFormInput" name="password" type="password" minLength={5} required value={password} onChange={e => onChange(e)}/>
            <button className='loginBtn'>POTVRDI</button>
            <div className='loginRegisterInfo'>Nemate otvoren račun? Otvori novi <Link to='/register'>račun</Link>.</div>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Login