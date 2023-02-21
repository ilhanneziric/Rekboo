import '../Styles/tagCard.scss'

const TagCard = ({addTag, removeTag, name,checked}) => {
  return (
    <>
    {
      checked?
      <div className="tagCardContainer" onClick={() => removeTag(name)}>
            <div className="tagCardBody tagCardChecked" ><div className="tagCardName tagCardNameChecked">{name}</div></div>
      </div>:
      <div className="tagCardContainer" onClick={() => addTag(name)}>
            <div className="tagCardBody"><div className="tagCardName">{name}</div></div>
      </div>
    }
    </>
  )
}

export default TagCard