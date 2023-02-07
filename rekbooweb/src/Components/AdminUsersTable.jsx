import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../redux/actions/usersActions'

const AdminUsersTable = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.users);
  const {users, loading, error} = usersData;

  useEffect(() => {
    dispatch(getUsers());
  },[dispatch]);

  return (
    <>
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
                </tr>))
            }
        </tbody>
    </table>
    </>
  )
}

export default AdminUsersTable