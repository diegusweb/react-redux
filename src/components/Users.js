import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/users/userSlice";

function Users() {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])


  return (
    <div className="App">
      <h1>Welcome to users</h1>
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  )
}

export default Users