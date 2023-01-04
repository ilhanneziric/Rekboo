import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import '../Styles/homepage.scss'

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className="navcontainer">
        <Link to='/plannerplan'><div className="plannerplan">Plan</div></Link>
        <Link to='/plannerregister'><div className="plannerplan">Register</div></Link>
        <Link to='/planneraddress'><div className="plannerplan">Address</div></Link>
        <Link to='/plannermeals'><div className="plannerplan">Meals</div></Link>  
      </div>
      <Footer/>
    </>
  )
}

export default HomePage