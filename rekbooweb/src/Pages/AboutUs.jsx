import Header from "../Components/Header"
import { updStep } from '../redux/actions/stepActions';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

const AboutUs = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updStep(0));
  }, []);
  return (
    <>
      <Header/>
    </>
  )
}

export default AboutUs