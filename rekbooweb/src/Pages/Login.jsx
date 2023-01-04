import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import '../Styles/login.scss'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    
    const { email, password} = inputs;

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
      <div className="loginContainerAll">
        <h1 className="loginTitle">PRIJAVA NA RAČUN</h1>
        <div className="loginContainer">
          <form onSubmit={onSubmitForm} className="loginForm">
            <label className="loginFormLbl">UNESITE E-MAIL:</label>
            <input className="loginFormInput" name="email" type="email" value={email} onChange={e => onChange(e)}/>
            <label className="loginFormLbl">UNESITE ŠIFRU:</label>
            <input className="loginFormInput" name="password" type="password" value={password} onChange={e => onChange(e)}/>
            <button className='loginBtn'>POTVRDI</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login