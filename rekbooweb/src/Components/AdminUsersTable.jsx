import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { getUsers } from '../redux/actions/usersActions'
import AdminUserOrdersModal from "./AdminUserOrdersModal";

const AdminUsersTable = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.users);
  const {users, loading, error} = usersData;

  const [user, setuser] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const openModal = (user) => {
    setuser(user);
    setShow(true);
  }

  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);
  
  return (
    <>
    {
      loading?<HashLoader color={"#59de09"}/>:
      <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Email</th>
                <th>Telefon</th>
                <th>Grad</th>
                <th>Adresa</th>
                <th>Uloga</th>
                <th>Narudžbe</th>
            </tr>
        </thead>
        <tbody>
            {
                users?.map(u => (<tr key={u.userID}>
                    <td>{u.userID}</td>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.city}</td>
                    <td>{u.address}</td>
                    <td>{u.role}</td>
                    <td><div className="activeBtn" onClick={(e) => openModal(u)}>NARUDŽBE</div></td>
                </tr>))
            }
        </tbody>
      </table>
    }
    <AdminUserOrdersModal show={show} handleClose={handleClose} user={user}/>
    </>
  )
}

export default AdminUsersTable