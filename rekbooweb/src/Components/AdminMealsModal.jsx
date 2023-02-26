import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMeal,editMeal } from '../redux/actions/mealsActions'
import NoImage from '../Assets/NoImage.png';
import Select from 'react-select'
import MealsService from "../Services/MealsService";
import '../Styles/_parent.scss';

const AdminMealsModal = ({show, handleClose, meal = null}) => {
    const disptach = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        calories: 0,
        active: false,
        photo1: '',
        photo2: '',
        tags: []
    });

    const { name, description, calories, active, photo1, photo2, tags } = inputs;

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [allTags, setAllTags] = useState([]);

    const handleSelectChange = (selectedTags) => {
        setInputs({...inputs, tags: selectedTags});
      };

    const onChange = e => {
        if(e.target.type === 'file'){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
                if ((encoded.length % 4) > 0) {
                    encoded += '='.repeat(4 - (encoded.length % 4));
                }
                setInputs({...inputs, [e.target.name] : encoded});    
            };
        }else if(e.target.type === 'checkbox'){
            setInputs({...inputs, [e.target.name] : e.target.checked});    
        }else if(e.target.type === 'number'){
            setInputs({...inputs, [e.target.name] : Number(e.target.value)});    
        }else if(e.target.type === 'text'){
            setInputs({...inputs, [e.target.name] : e.target.value});    
        }
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        if(meal === null){
            disptach(addMeal(inputs));
        }else{
            disptach(editMeal({...inputs, tags: tags.map((option) => option.value)}));
        }
        handleClose();
    }

    const getTags = async () => { setAllTags(await MealsService.getTags()); }
    
    useEffect(() => {
        meal && setInputs({...meal, tags: meal?.tags.map((option) => ({ value: option, label: option }))});
        getTags();
    }, [meal]);

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
        //   border: '2px solid #3E5418',
          marginBottom: '10px',
          outline: 'none',
          border: state.isFocused ? '2px solid #59de09' : '2px solid #3E5418',
          boxShadow: 'none',
          '&:hover': {
            border: state.isFocused ? '2px solid #59de09' : '2px solid #3E5418',
          },
          '&:focus': {
            border: '2px solid #59de09',
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
                            photo1 === '' ?
                            <img src={NoImage} alt="" className="imageAdminMealModal"/>:
                            <img src={`data:image/png;base64,${photo1}`} alt="" className="imageAdminMealModal"/>
                        }
                        <label htmlFor="photo1" className="lblAdminMealModal">Početna slika</label>
                        <input type="file" name="photo1" required className="fileInputAdminMealModal" accept="image/png, image/gif, image/jpeg" onChange={e => onChange(e)}/>
                    </div>

                    <div className="imageAdminMealModalContainer">
                        {
                            photo2 === '' ?
                            <img src={NoImage} alt="" className="imageAdminMealModal"/>:
                            <img src={`data:image/png;base64,${photo2}`} alt="" className="imageAdminMealModal" />
                        }
                        <label htmlFor="photo2" className="lblAdminMealModal">Sporedna slika</label>
                        <input type="file" name="photo2" required className="fileInputAdminMealModal" accept="image/png, image/gif, image/jpeg" onChange={e => onChange(e)}/>
                    </div>
                </div>

                <label htmlFor="name" className="lbl">Naziv:</label>
                <input type="text" name="name" required className="inputText" value={name} onChange={e => onChange(e)}/>

                <label htmlFor="description" className="lbl">Opis:</label>
                <textarea name="description" required className="inputTextarea" value={description} onChange={e => onChange(e)}/>

                <label htmlFor="calories" className="lbl">Kalorije:</label>
                <input type="number" name="calories" required className="inputNumber" value={calories} onChange={e => onChange(e)}/>

                <label className="lbl">Kategorije:</label>
                <Select styles={customStyles} classNamePrefix="inputMultiSelect" placeholder={'Odaberi kategorije jela'} options={allTags.map((option) => ({ value: option, label: option }))} value={tags} onChange={handleSelectChange} isMulti={true}/>

                <div className="checkbox-rect">
                    <input type="checkbox" id="checkbox-rect1" name="active" required checked={active} onChange={e => onChange(e)}/>
                    <label htmlFor="checkbox-rect1">Aktivno jelo</label>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className="editBtnModal" onClick={handleClose}>ODUSTANI</div>
                <div className="activeBtnModal" onClick={onSubmitForm}>SPASI</div>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AdminMealsModal