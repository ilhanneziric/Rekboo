import { Link } from 'react-router-dom';
import LogoWithName from '../Assets/LogoWithName.png';
import '../Styles/header.scss'

const Header = ({isLogged}) => {
  return (
    <>
        <Link to='/'><img className='logo' src={LogoWithName} alt="logo"/></Link>
        {
          !isLogged && <Link to='/login'><div className='loginHeaderBtn'>LOGIN</div></Link>
        }
    </>
  )
}

export default Header