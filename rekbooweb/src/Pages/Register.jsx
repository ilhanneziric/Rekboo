import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import UsersService from "../Services/UsersService";
import '../Styles/register.scss'
import { registerValidation } from "../Utils/validations";

const Register = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
        role: 'User'
    });

    const [validationError, setValidationError] = useState(false);
    
    const { email, password, passwordConfirmation} = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value});        
    }

    const onSubmitForm = async e => {
        e.preventDefault();    
        try {
          var { error } = registerValidation(inputs);
          if(error){
            setValidationError(true);
          }else{
            const response = await UsersService.register(inputs);
            if(response){
                navigate('/login');
            }else{
              setValidationError(true);
            }
          } 
        } catch (err) {
          setValidationError(true);
        }
    } 

  return (
    <>
        <Header/>
        <div className="registerContainerAll">
        <h1 className="registerTitle">REGISTRACIJA NOVOG RAČUNA</h1>
        <div className="registerContainer">
            <form onSubmit={onSubmitForm} className="registerForm">
                {validationError && <p style={{color: 'red'}}>Imate grešku u unesenim vrijednostima!</p>}
                <label className="registerFormLbl">UNESITE E-MAIL:</label>
                <input className="registerFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">UNESITE ŠIFRU:</label>
                <input className="registerFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">PONOVO UNESITE ŠIFRU:</label>
                <input className="registerFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/>
                <button className='registerBtn'>POTVRDI</button>
                  <div >Imate otvoren račun? <Link to='/login'>Prijavi se</Link>.</div>
            </form>
        </div>
        </div>
        <Footer/>
    </>
    
  )
}

export default Register