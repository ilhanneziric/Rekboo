import '../Styles/navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
  <>
    <div className="navigationContainer">
        <Link to='/plannerplan'><div className="navigationItem">KREIRAJ PLAN</div></Link>
        <Link to='/aboutus'><div className="navigationItem">O NAMA</div></Link>
        <Link to='/howitworks'><div className="navigationItem">KAKO RADI REKBOO</div></Link>
    </div>
  </>
  )
}

export default Navigation