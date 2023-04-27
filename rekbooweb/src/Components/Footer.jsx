import '../Styles/footer.scss'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footerWholeContainer'>
        <div className="footerNonAbsoluteElement"></div>
        <div className="footerContainer">
          <div className="socialMediaContainer">
            <a href='//facebook.com/p/Rekboo-100086738291625/?_rdr'><BsFacebook style={{margin: '0 10px'}} color='white'/></a>
            <a href='//instagram.com/rekboocom/'><BsInstagram style={{margin: '0 10px'}} color='white'/></a>
            <a href='//linkedin.com/company/rekboo?trk=similar-pages'><BsLinkedin style={{margin: '0 10px'}} color='white'/></a>
          </div>
          <div className="copyRightContainer">
            Copyright © {new Date().getFullYear()} Rekboo Sva prava zadržana.
          </div>
        </div>
    </div>
  )
}

export default Footer