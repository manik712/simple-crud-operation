

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  console.log(loadedUsers);
  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted");
          const reaming = users.filter(user => user._id !== _id);
          setUsers(reaming);
        }
      });
  };

  return (
    <div>
      {loadedUsers.length}
      <div>
        {loadedUsers.map((user) => (
          <p key={user._id}>
            {user.name}:{user.email}
            {user._id}
            <button onClick={() => handleDelete(user._id)}>delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
