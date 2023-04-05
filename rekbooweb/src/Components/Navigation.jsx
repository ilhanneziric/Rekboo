import '../Styles/navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
  <>
  {
    
    (window.location.pathname !== '/adminlogin' && 
    window.location.pathname !== '/adminmeals' && 
    window.location.pathname !== '/adminorders' && 
    window.location.pathname !== '/adminusers' && 
    window.location.pathname !== '/adminreports') ?
    <div className="navigationContainer">
        {/* <Link to='/aboutus'><div className="navigationItem">O NAMA</div></Link> */}
        <Link to='/howitworks'><div className="navigationItem">KAKO RADI REKBOO</div></Link>
        <Link to='/plannerplan'><div className="navigationItem">PROBAJ REKBOO</div></Link>
    </div>:
    <></>
  }
  </>
  )
}

export default Navigation