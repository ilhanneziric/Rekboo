import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeals, editMeal} from '../redux/actions/mealsActions'
import AdminMealsModal from "./AdminMealsModal";
import NoImage from '../Assets/NoImage.png';
import HashLoader from "react-spinners/HashLoader";

const AdminMealsTable = () => {
  const dispatch = useDispatch();
  const mealsData = useSelector(state => state.meals);
  const {meals, loading, error} = mealsData;

  const [meal, setMeal] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const openModal = (m) => {
    setMeal(m);
    setShow(true);
  }

  useEffect(() => {
    dispatch(getMeals());
  },[dispatch]);

  const override = {
    position: 'absolute',
    zIndex: '1',
    top: '50%',
    left: '50%'
  };
  return (
    <>
    {
      loading&&<HashLoader color={"#59de09"} cssOverride={override}/>
    }
    <table className="table text-center">
      <thead>
          <tr>
              <th>ID</th>
              {/* <th>Glavna slika</th> */}
              {/* <th>Sporedna slika</th> */}
              <th>Naziv</th>
              <th>Opis</th>
              <th>Kalorije</th>
              <th>Detalji</th>
              <th>Aktivacija</th>
          </tr>
      </thead>
      <tbody>
          {            
              meals?.map((m, index) => (<tr key={index}>
                  <td>{m.mealID}</td>
                  {/* <td>
                    {
                      m.photo1 === '' || m.photo1 === undefined?
                      <img src={NoImage} alt="" className="imageAdminMealTable"/>:
                      <img src={`data:image/png;base64,${m.photo1}`} alt="" className="imageAdminMealTable"/>
                    }
                  </td>
                  <td>
                    {
                      m.photo2 === '' || m.photo2 === undefined ?
                      <img src={NoImage} alt="" className="imageAdminMealTable"/>:
                      <img src={`data:image/png;base64,${m.photo2}`} alt="" className="imageAdminMealTable"/>
                    }
                  </td> */}
                  <td>{m.name}</td>
                  <td>{m.description}</td>
                  <td>{m.calories}</td>
                  <td><div className="editBtn" onClick={(e) => openModal(m)}>DETALJI</div></td>
                  {
                    m.active ?
                    <td><div className="deleteBtn" onClick={(e) => dispatch(editMeal({...m, active: !m.active}))}>DEAKTIVIRAJ</div></td>:
                    <td><div className="activeBtn" onClick={(e) => dispatch(editMeal({...m, active: !m.active}))}>AKTIVIRAJ</div></td>
                  }
              </tr>))
            }
        </tbody>
    </table>
    <AdminMealsModal show={show} handleClose={handleClose} meal={meal}/>
    </>
  )
}

export default AdminMealsTable