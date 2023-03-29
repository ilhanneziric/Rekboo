import '../Styles/homepage.scss'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import HomePagePhoto from '../Assets/HomePagePhoto.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
        <div className="homePageMainContiner">
          <div className="homePageTextContainer">
            <div className="homePagePhotoText">
              Uz REKBOO kuhanje nikad nije bilo jednostavnije
            </div>
            <Link to='/plannerplan' className="homePagePhotoBtnContainer"><div className='homePagePhotoBtn'>PROBAJ REKBOO</div></Link>
          </div>
          <div className="homePagePhotoContainer">
              <img src={HomePagePhoto} alt="" className='homePagePhoto'/>
              <div className="homePagePhotoGreenGradient"></div>
              <div className="homePagePhotoWhiteGradient"></div>
          </div>
        </div>

      {/* <Footer/> */}
    </>
  )
}

export default HomePage