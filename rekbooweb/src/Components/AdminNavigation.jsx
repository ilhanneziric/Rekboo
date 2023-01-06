import { Link } from 'react-router-dom'
import '../Styles/adminnavigation.scss'

const AdminNavigation = ({activeItem}) => {
  return (
    <>
      <div className="adminNavContainer">
        {
            activeItem === "orders" ? 
            <Link to='/adminorders'><div className="adminNavItem activeItem">NARUDŽBE</div></Link>:
            <Link to='/adminorders'><div className="adminNavItem">NARUDŽBE</div></Link>
        }
        {
            activeItem === "meals" ? 
            <Link to='/adminmeals'><div className="adminNavItem activeItem">JELA</div></Link>:
            <Link to='/adminmeals'><div className="adminNavItem">JELA</div></Link>
        }
        {
            activeItem === "users" ? 
            <Link to='/adminusers'><div className="adminNavItem activeItem">KORISNICI</div></Link>:
            <Link to='/adminusers'><div className="adminNavItem">KORISNICI</div></Link>
        }

        {
            activeItem === "reports" ? 
            <Link to='/adminreports'><div className="adminNavItem activeItem">IZVJEŠTAJI</div></Link>:
            <Link to='/adminreports'><div className="adminNavItem">IZVJEŠTAJI</div></Link>
        }
      </div>
    </>
  )
}

export default AdminNavigation