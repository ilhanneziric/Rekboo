import '../Styles/header.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';
import { Link, useNavigate } from 'react-router-dom';
import LogoWithName from '../Assets/LogoWithName.png';
import LogoHorisWithName from '../Assets/LogoHorisName.png';
import { AiOutlineUser } from "react-icons/ai";
import Navigation from './Navigation';
import FullScreenNavigation from './FullScreenNavigation';
import { Sling as Hamburger } from 'hamburger-react'

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const order = useSelector(state => state.order);
  const [openLogOutBtn, setOpenLogOutBtn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate();

  const logoOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(updIsAuthenticated());
    navigate('/');
  }

  useEffect(() => {
    if (openMenu) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [openMenu])
  return (
    <>
    { openMenu && <FullScreenNavigation setOpenMenu={setOpenMenu}/> }

    <div className="headerContainer">
        {
          (window.location.pathname !== '/login' && 
          window.location.pathname !== '/register' && 
          window.location.pathname !== '/plannerplan' && 
          window.location.pathname !== '/plannerregister' && 
          window.location.pathname !== '/planneraddress' && 
          window.location.pathname !== '/plannercheckout' && 
          window.location.pathname !== '/plannermeals' && 
          window.location.pathname !== '/planneroverview') ?
          <><Link to='/'><img className='logo' src={LogoWithName} alt="logo"/></Link>
          <Link to='/'><img className='logoHorisontal' src={LogoHorisWithName} alt="logo"/></Link>
          <Navigation/>
          {
          !isAuthenticated ?
          <><Link to='/login'><div className='loginHeaderBtn'>PRIJAVA</div></Link></>:
          <div className="prileBtnContainer">
            <div className="profileHeaderBtnContainer">
              <AiOutlineUser className='profileHeaderBtn' onClick={() => setOpenLogOutBtn(!openLogOutBtn)}/>
            </div>
            <div className="profileHeaderBtnLoader">
              {openLogOutBtn && <div className="profileHeaderBtn logOutBtn" onClick={(e) => navigate('/userorders')}>Moje narudžbe</div>}
              {openLogOutBtn && <div className="profileHeaderBtn logOutBtn" onClick={(e) => logoOut(e)}>Odjava</div>}
            </div>
            </div>}
            <div className="hamburgerMenuContainer">
            {
              openMenu?
              <Hamburger toggled={openMenu} toggle={setOpenMenu} color="white"/>:
              <Hamburger toggled={openMenu} toggle={setOpenMenu} color="#59de09"/>
            }
            </div>
            </>
            :(<><Link to='/'><img className='plannerLogo' src={LogoWithName} alt="logo"/></Link></>)
        }
    </div>
    </>
  )
}

export default Header