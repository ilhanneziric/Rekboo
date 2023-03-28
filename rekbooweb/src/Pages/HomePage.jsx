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
        <div className="homePageMainContiner3">
          <div className="homePageTextContainer3">
            <div className="homePagePhotoText3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quasi animi itaque?
            </div>
            <Link to='/plannerplan'><div className="homePagePhotoBtn3">KREIRAJ PLAN</div></Link>
          </div>
          <div className="homePagePhotoContainer3">
              <img src={HomePagePhoto} alt="" className='homePagePhoto3'/>
              <div className="homePagePhotoGreenGradient3"></div>
              <div className="homePagePhotoWhiteGradient3"></div>
          </div>
        </div>

      <Footer/>
    </>
  )
}

export default HomePage