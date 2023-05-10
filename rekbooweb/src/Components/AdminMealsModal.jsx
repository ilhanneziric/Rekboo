import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMeal,editMeal } from '../redux/actions/mealsActions'
import NoImage from '../Assets/NoImage.png';
import Select from 'react-select'
import MealsService from "../Services/MealsService";
import { mealValidation } from "../Utils/validations";
import { ImageURL } from "../config";

const AdminMealsModal = ({show, handleClose, meal = null}) => {
    const disptach = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        calories: 0,
        time: 0,
        active: false,
        photo1: null,
        photo2: null,
        tags: []
    });

    const { name, description, calories, time, active, photo1, photo2, tags } = inputs;

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [validationError, setValidationError] = useState(null);

    const handleSelectChange = (selectedTags) => {
        setInputs({...inputs, tags: selectedTags});
      };

    const onChange = e => {
        if(e.target.type === 'file'){
            const file = e.target.files[0];
            setInputs({...inputs, [e.target.name] : file});    
        }else if(e.target.type === 'checkbox'){
            setInputs({...inputs, [e.target.name] : e.target.checked});    
        }else if(e.target.type === 'number'){
            setInputs({...inputs, [e.target.name] : Number(e.target.value)});    
        }else if(e.target.type === 'text' || e.target.type === 'textarea'){
            setInputs({...inputs, [e.target.name] : e.target.value});    
        }
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        var mealData = {...inputs, tags: tags.map((option) => option.value)}; 
        var { error } = mealValidation(mealData);
        if(error){
            setValidationError(error.toString());
        }else{
            setValidationError(null);

            const formData = new FormData();
            formData.append("Name", mealData.name);
            formData.append("Description", mealData.description);
            formData.append("Calories", mealData.calories);
            formData.append("Time", mealData.time);
            formData.append("Active", mealData.active);
            formData.append("Photo1", mealData.photo1);
            formData.append("Photo2", mealData.photo2);
            mealData.tags.forEach((tag, index) => {
                formData.append(`Tags[${index}]`, tag);
            });

            if(meal === null){
                disptach(addMeal(formData));
            }else{
                disptach(editMeal(formData, meal.mealID));
            }

            handleClose();
        }

    }

    const getTags = async () => { setAllTags(await MealsService.getTags()); }
    
    useEffect(() => {
        meal && setInputs({...meal, tags: meal?.tags.map((option) => ({ value: option, label: option }))});
        getTags();
    }, [meal]); //delete meal??

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          marginBottom: '10px',
          outline: 'none',
          borderRadius: '0',
          border: state.isFocused ? 'none' : 'none',
          backgroundColor: state.isFocused ? '#d6d4d4' : '#ececec',
          boxShadow: 'none',
          '&:hover': {
            border: state.isFocused ? 'none' : 'none',
            backgroundColor: state.isFocused ? '#d6d4d4' : '#ececec',
          },
          '&:focus': {
            backgroundColor: '#d6d4d4',
          },
          '.css-1p3m7a8-multiValue': {
            backgroundColor: '#d6d4d4',
            fontWeight: '500'
          }
        })
      };
  return (
    <>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
            <Modal.Header>
                <Modal.Title>Detalji o jelu</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="imagesAdminMealModalContainer">
                    <div className="imageAdminMealModalContainer">
                        {
                            photo1 === null ?
                            <img src={NoImage} alt="" className="imageAdminMealModal"/>:
                            <img src={typeof photo1 === 'string' ? `${ImageURL}${photo1}` : URL.createObjectURL(photo1)} alt="" className="imageAdminMealModal"/>
                        }
                        <label htmlFor="photo1" className="lbl">Glavna slika</label>
                        <input type="file" name="photo1" required className="fileInputAdminMealModal" accept="image/png, image/gif, image/jpeg" onChange={e => onChange(e)}/>
                    </div>

                    <div className="imageAdminMealModalContainer">
                        {
                            photo2 === null ?
                            <img src={NoImage} alt="" className="imageAdminMealModal"/>:
                            <img src={typeof photo2 === 'string' ? `${ImageURL}${photo2}` : URL.createObjectURL(photo2)} alt="" className="imageAdminMealModal" />
                        }
                        <label htmlFor="photo2" className="lbl">Sporedna slika</label>
                        <input type="file" name="photo2" required className="fileInputAdminMealModal" accept="image/png, image/gif, image/jpeg" onChange={e => onChange(e)}/>
                    </div>
                </div>

                <label htmlFor="name" className="lbl">Naziv:</label>
                <input type="text" name="name" required className="inputText" value={name} onChange={e => onChange(e)}/>

                <label htmlFor="description" className="lbl">Opis:</label>
                <textarea name="description" required className="inputTextarea" value={description} onChange={e => onChange(e)}/>

                <div className="adminMealsModalCaloriesTimeContainer">
                    <div className="adminMealsModalCaloriesTime">
                        <label htmlFor="calories" className="lbl">Kalorije:</label>
                        <input type="number" name="calories" required className="adminMealsModalInputNumber" value={calories} onChange={e => onChange(e)}/>
                    </div>
                    <div className="adminMealsModalCaloriesTime">
                        <label htmlFor="time" className="lbl">Vrijeme pripreme:</label>
                        <input type="number" name="time" required className="adminMealsModalInputNumber" value={time} onChange={e => onChange(e)}/>
                    </div>

                </div>

                <label className="lbl">Kategorije:</label>
                <Select styles={customStyles} classNamePrefix="inputMultiSelect" placeholder={'Odaberi'} options={allTags.map((option) => ({ value: option, label: option }))} value={tags} onChange={handleSelectChange} isMulti={true}/>

                <div className="checkbox-rect">
                    <input type="checkbox" id="checkbox-rect1" name="active" required checked={active} onChange={e => onChange(e)}/>
                    <label htmlFor="checkbox-rect1">Aktivno jelo</label>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className="editBtnModal" onClick={handleClose}>NAZAD</div>
                <div className="activeBtnModal" onClick={onSubmitForm}>SPASI</div>
                {validationError && <p className="AdminMealsModalValidationError">{validationError}</p>}
                
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AdminMealsModal