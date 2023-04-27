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
        <span className="navigationItemContainer"><Link to='/howitworks'><p className="navigationItem">KAKO RADI REKBOO</p></Link></span>
        <span className="navigationItemContainer"><Link to='/plannerplan'><p className="navigationItem">PROBAJ REKBOO</p></Link></span>
    </div>:
    <></>
  }
  </>
  )
}

export default Navigation