import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { Link } from 'react-router-dom';
import LogoWithName from '../Assets/LogoWithName.png';
import '../Styles/header.scss'
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const order = useSelector(state => state.order);
  const [openLogOutBtn, setOpenLogOutBtn] = useState(false);

  const logoOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(updIsAuthenticated());
  }
  return (
    <>
        <Link to='/'><img className='logo' src={LogoWithName} alt="logo"/></Link>
        {
          (window.location.pathname !== '/login' && 
          window.location.pathname !== '/register' && 
          window.location.pathname !== '/plannerplan' && 
          window.location.pathname !== '/plannerregister' && 
          window.location.pathname !== '/planneraddress' && 
          window.location.pathname !== '/plannercheckout' && 
          window.location.pathname !== '/plannermeals') ?
          (!isAuthenticated ?
          <Link to='/login'><div className='loginHeaderBtn'>PRIJAVA</div></Link>:
          <div className="prileBtnContainer">
            <AiOutlineUser className='profileHeaderBtn' onClick={() => setOpenLogOutBtn(!openLogOutBtn)}/>
            {openLogOutBtn && <div className="profileHeaderBtn logOutBtn" onClick={(e) => logoOut(e)}>Odjava</div>}
          </div>):(<></>)
        }
    </>
  )
}

export default Header