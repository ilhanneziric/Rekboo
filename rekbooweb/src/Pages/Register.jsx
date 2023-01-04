import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import '../Styles/register.scss'

const Register = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        passwordConfirmation: ''
    });
    
    const { email, password, passwordConfirmation} = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value});        
    }

    const onSubmitForm = async e => {
        e.preventDefault();    
        console.log(inputs);
    } 

  return (
    <>
        <Header/>
        <div className="registerContainerAll">
        <h1 className="registerTitle">REGISTRACIJA NOVOG RAČUNA</h1>
        <div className="registerContainer">
            <form onSubmit={onSubmitForm} className="registerForm">
                <label className="registerFormLbl">UNESITE E-MAIL:</label>
                <input className="registerFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">UNESITE ŠIFRU:</label>
                <input className="registerFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
                <label className="registerFormLbl">PONOVO UNESITE ŠIFRU:</label>
                <input className="registerFormInput" name="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => onChange(e)}/>
                <button className='registerBtn'>POTVRDI</button>
            </form>
        </div>
        </div>
        <Footer/>
    </>
    
  )
}

export default Register