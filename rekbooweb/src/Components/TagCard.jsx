import '../Styles/tagCard.scss'

const TagCard = ({icon, iconChecked, name,checked}) => {
  return (
    <>
    <div className="tagCardContainer">
        {
            checked?
            <div className="tagCardBody tagCardChecked"><img src={iconChecked} alt="Tag card icon" className="tagCardIcon"/></div>:
            <div className="tagCardBody"><img src={icon} alt="Tag card icon" className="tagCardIcon"/></div>
        }        
        <div className="tagCardName">{name}</div>
    </div>
    </>
  )
}

export default TagCard