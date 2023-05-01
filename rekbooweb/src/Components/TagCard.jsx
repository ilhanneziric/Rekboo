import '../Styles/tagCard.scss'

const TagCard = ({addTag, removeTag, name,checked, disabled = false}) => {
  return (
    <>
    {
      checked ?
      <div className="tagCardContainer" onClick={() => disabled ? '' :  removeTag(name)}>
              <div className={disabled ? "tagCardBody tagCardChecked tagCardBodyDisabled" : "tagCardBody tagCardChecked"} >
                <div className={disabled ? "tagCardName tagCardNameChecked tagCardNameDisabled" : "tagCardName tagCardNameChecked"}>{name}</div>
              </div>
      </div>:
      <div className="tagCardContainer" onClick={() => disabled ? '' : addTag(name)}>
          <div className={disabled ? "tagCardBody tagCardBodyDisabled" : "tagCardBody"}>
            <div className={disabled ? "tagCardName tagCardNameDisabled" : "tagCardName"}>{name}</div>
          </div>
      </div>
    }
    </>
  )
}

export default TagCard