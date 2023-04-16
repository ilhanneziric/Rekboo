import '../Styles/homepage.scss'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import HomePagePhoto3 from '../Assets/HomePagePhoto3.jpg';
import HomePageImg2 from '../Assets/HomePageImg2.jpg';
import HomePageImg3 from '../Assets/HomePageImg3.jpg';
import HomePageImg4 from '../Assets/HomePageImg4.jpg';
import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
        <div className="homePagePhotoContainer2">
          <img src={HomePagePhoto3} alt="" className='homePagePhoto2'/>
          <img src={HomePageImg2} alt="" className='homePageImg2'/>
          <img src={HomePageImg3} alt="" className='homePageImg3'/>
          <img src={HomePageImg4} alt="" className='homePageImg4'/>
          <div className="homePageTextAndButtonContainer2">
            <div className="homePageTextContainer2">Uz REKBOO kuhanje nikad nije bilo JEDNOSTAVNIJE</div>
            <div className="homePageButtonsContainer2">
              <Link to='/plannerplan'><div className='homePagePhotoBtn2'>PROBAJ REKBOO</div></Link>
              {!isAuthenticated && <Link to='/login'><div className='homePagePhotoLoginBtn2'>PRIJAVA</div></Link>}
            </div>
          </div>
        </div>
      <HowItWorks/>
      {/* <Footer/> */}
    </>
  )
}

export default HomePage