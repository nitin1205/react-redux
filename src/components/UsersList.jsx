import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../store";



function UsersList() {

    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if(isLoading) {
        return <dir>Loading....</dir>
    };

    if(error) {
        return <div>Error fetching data</div>
    }
  return (
    <div>{data.length}</div>
  )
}

export default UsersList;