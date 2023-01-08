import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import '../Styles/login.scss'
import { loginValidation } from '../Utils/validations';
import { useDispatch } from "react-redux";
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
      email: '',
      password: '',
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
          const response = await axios.post(`https://localhost:44305/api/User/login`, inputs);
          const parseRes = await response.data;
          if(parseRes){
              localStorage.setItem('token', parseRes);
              dispatch(updIsAuthenticated());
          } 
        } 
      } catch (err) {
        localStorage.removeItem('token')
        dispatch(updIsAuthenticated());
        setValidationError(true);
      }
  } 
  return (
    <>
      <Header/>
      <div className="loginContainerAll">
        <h1 className="loginTitle">PRIJAVA NA RAČUN</h1>
        <div className="loginContainer">
          <form onSubmit={onSubmitForm} className="loginForm">
            {validationError && <p style={{color: 'red'}}>Pogrešan email ili šifra!</p>}
            <label className="loginFormLbl">UNESITE E-MAIL:</label>
            <input className="loginFormInput" name="email" type="email" required value={email} onChange={e => onChange(e)}/>
            <label className="loginFormLbl">UNESITE ŠIFRU:</label>
            <input className="loginFormInput" name="password" type="password" minLength={5} required value={password} onChange={e => onChange(e)}/>
            <button className='loginBtn'>POTVRDI</button>
            <div >Nemate otvoren račun? Otvori novi <Link to='/register'>račun</Link>.</div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login