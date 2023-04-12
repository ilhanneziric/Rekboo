import '../Styles/tagCard.scss'

const TagCard = ({addTag, removeTag, name,checked, disabled = false}) => {
  return (
    <>
    {
      checked?
      <div className="tagCardContainer" onClick={() => removeTag(name)}>
            {
              disabled?
              <div className="tagCardBody tagCardChecked tagCardBodyDisabled" ><div className="tagCardName tagCardNameChecked tagCardNameDisabled">{name}</div></div>:
              <div className="tagCardBody tagCardChecked" ><div className="tagCardName tagCardNameChecked">{name}</div></div>
            }
      </div>:
      <div className="tagCardContainer" onClick={() => addTag(name)}>
        {
          disabled?
          <div className="tagCardBody tagCardBodyDisabled"><div className="tagCardName tagCardNameDisabled">{name}</div></div>:
          <div className="tagCardBody"><div className="tagCardName">{name}</div></div>
        }
      </div>
    }
    </>
  )
}

export default TagCard