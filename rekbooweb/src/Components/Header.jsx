import '../Styles/header.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { Link, useNavigate } from 'react-router-dom';
import LogoWithName from '../Assets/LogoWithName.png';
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const order = useSelector(state => state.order);
  const [openLogOutBtn, setOpenLogOutBtn] = useState(false);
  const navigate = useNavigate();

  const logoOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(updIsAuthenticated());
    navigate('/');
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
          window.location.pathname !== '/plannermeals' && 
          window.location.pathname !== '/planneroverview') ?
          (!isAuthenticated ?
          <Link to='/login'><div className='loginHeaderBtn'>PRIJAVA</div></Link>:
          <div className="prileBtnContainer">
            <div className="profileHeaderBtnContainer">
              <AiOutlineUser className='profileHeaderBtn' onClick={() => setOpenLogOutBtn(!openLogOutBtn)}/>
            </div>
            {openLogOutBtn && <div className="profileHeaderBtn logOutBtn" onClick={(e) => navigate('/userorders')}>Moje narudžbe</div>}
            {openLogOutBtn && <div className="profileHeaderBtn logOutBtn" onClick={(e) => logoOut(e)}>Odjava</div>}
          </div>):(<></>)
        }
    </>
  )
}

export default Header