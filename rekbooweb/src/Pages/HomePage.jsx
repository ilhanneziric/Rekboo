import '../Styles/homepage.scss'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import HomePagePhoto from '../Assets/HomePagePhoto.jpeg';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
        <div className="homePagePhotoContainer">
          <img src={HomePagePhoto} alt="" className='homePagePhoto'/>
          <div className="homePagePhotoGreenGradient"></div>
          <div className="homePagePhotoWhiteGradient"></div>
        </div>
      <Footer/>
    </>
  )
}

export default HomePage