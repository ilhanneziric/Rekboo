import { Link } from 'react-router-dom';
import LogoWithName from '../Icons/LogoWithName.png';
import '../Styles/header.scss'

const Header = () => {
  return (
    <>
        <Link to='/'><img className='logo' src={LogoWithName} alt="logo"/></Link>
        <div className='btn loginBtn'>LOGIN</div>
    </>
  )
}

export default Header