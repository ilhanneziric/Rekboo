import { Link } from 'react-router-dom'
import '../Styles/adminnavigation.scss'

const AdminNavigation = ({activeItem}) => {
  return (
    <>
      <div className="adminNavContainer">
        {
            activeItem === "orders" ? 
            <Link to='/adminorders'><div className="adminNavItem activeItem">Narudžbe</div></Link>:
            <Link to='/adminorders'><div className="adminNavItem">Narudžbe</div></Link>
        }
        {
            activeItem === "meals" ? 
            <Link to='/adminmeals'><div className="adminNavItem activeItem">Jela</div></Link>:
            <Link to='/adminmeals'><div className="adminNavItem">Jela</div></Link>
        }
        {
            activeItem === "users" ? 
            <Link to='/adminusers'><div className="adminNavItem activeItem">Korisnici</div></Link>:
            <Link to='/adminusers'><div className="adminNavItem">Korisnici</div></Link>
        }

        {
            activeItem === "reports" ? 
            <Link to='/adminreports'><div className="adminNavItem activeItem">Izvještaji</div></Link>:
            <Link to='/adminreports'><div className="adminNavItem">Izvještaji</div></Link>
        }
      </div>
    </>
  )
}

export default AdminNavigation