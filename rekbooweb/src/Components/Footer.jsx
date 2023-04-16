import '../Styles/footer.scss'

const Footer = () => {
  return (
    <>
        <div className="footerContainer">
          <div className="copyRightContainer">
            Copyright © {new Date().getFullYear()} Rekboo Sva prava zadržana.
          </div>
        </div>
    </>
  )
}

export default Footer