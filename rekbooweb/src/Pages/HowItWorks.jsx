import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

const HowItWorks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
      <Footer/>
    </>  
  )
}

export default HowItWorks