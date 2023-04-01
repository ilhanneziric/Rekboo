import '../Styles/fullScreenNavigation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updIsAuthenticated } from '../redux/actions/isAuthenticatedActions';

const FullScreenNavigation = ({setOpenMenu}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  
  const logoOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(updIsAuthenticated());
    setOpenMenu(false);
    navigate('/');
  }
  return (
    <>
        <div className="fullScreenNavigationContainer">
            {!isAuthenticated && <Link to='/login'><div className="fullScreenNavigationItem">PRIJAVA</div></Link>}
            <Link to='/plannerplan'><div className="fullScreenNavigationItem">PROBAJ REKBOO</div></Link>
            {isAuthenticated && <Link to='/userorders'><div className="fullScreenNavigationItem">MOJE NARUDŽBE</div></Link>}
            <Link to='/howitworks'><div className="fullScreenNavigationItem">KAKO RADI REKBOO</div></Link>
            {isAuthenticated && <div className="fullScreenNavigationItem" onClick={(e) => logoOut(e)}>ODJAVA</div>}
        </div>
    </>
  )
}

export default FullScreenNavigation