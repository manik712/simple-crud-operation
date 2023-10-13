import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  console.log(loadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  useEffect(() => {
    setUsers(loadedUsers); // Update the users when new data is loaded
  }, [loadedUsers]);

  return (
    <div>
      <p>Total Users: {users.length}</p>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>
              Name: {user.name}<br />
              Email: {user.email}<br />
              ID: {user._id}
            </p>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
