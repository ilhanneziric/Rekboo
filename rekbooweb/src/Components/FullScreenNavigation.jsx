import '../Styles/fullScreenNavigation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';

const FullScreenNavigation = ({setOpenMenu}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  
  const logoOut = () => {
    localStorage.removeItem('token');
    dispatch(updIsAuthenticated());
    setOpenMenu(false);
    navigate('/');
  }

  const goTo = (dest) => {
    setOpenMenu(false);
    navigate(`/${dest}`);
  }
  return (
    <>
        <div className="fullScreenNavigationContainer">
            {!isAuthenticated && <div className="fullScreenNavigationItem" onClick={() => goTo('login')}>PRIJAVA</div>}
            <div className="fullScreenNavigationItem" onClick={() => goTo('plannerplan')}>PROBAJ REKBOO</div>
            {isAuthenticated && <div className="fullScreenNavigationItem" onClick={() => goTo('userorders')}>MOJE NARUDŽBE</div>}
            <div className="fullScreenNavigationItem" onClick={() => goTo('howitworks')}>KAKO RADI REKBOO</div>
            {isAuthenticated && <div className="fullScreenNavigationItem" onClick={logoOut}>ODJAVA</div>}
        </div>
    </>
  )
}

export default FullScreenNavigation