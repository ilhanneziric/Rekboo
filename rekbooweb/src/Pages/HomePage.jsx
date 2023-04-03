import '../Styles/homepage.scss'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import HomePagePhoto from '../Assets/HomePagePhoto.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
      <div className="homePageContainer">
        <div className="homePageMainContiner">
          <div className="homePageTextContainer">
            <div className="homePagePhotoText">
              Uz REKBOO kuhanje nikad nije bilo jednostavnije!
            </div>
            <div className="homePagePhotoBtnContainer">
              <Link to='/plannerplan' className="homePagePhotoBtnContainer"><div className='homePagePhotoBtn'>PROBAJ REKBOO</div></Link>
              {!isAuthenticated && <Link to='/login' className="homePagePhotoBtnContainer"><div className='homePagePhotoLoginBtn'>PRIJAVA</div></Link>}
            </div>
          </div>
          <div className="homePagePhotoContainer">
              <img src={HomePagePhoto} alt="" className='homePagePhoto'/>
              <div className="homePagePhotoGreenGradient"></div>
              <div className="homePagePhotoWhiteGradient"></div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  )
}

export default HomePage