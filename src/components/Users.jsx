import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  // console.log(data);

  const [users, setUsers] = useState(data);

  const handleDelete = (clientId) => {
    // console.log(clientId);
    fetch(`http://localhost:5000/users/${clientId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
        }

        const remainingUsers = users.filter(
          (element) => element._id !== clientId
        );
        setUsers(remainingUsers);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <Link to="/" className="text-xl font-bold bg-blue-500">
          Go To Home Page
        </Link>
        {/* data must come from state to keep the ui updated */}
        <h1 className="my-5">Student Available : {users.length}</h1>
        <div className="">
          {users.map((item) => (
            <p key={item._id} className="bg-yellow-500 my-5">
              {item.name} : {item.email} : {item._id}{" "}
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 p-1"
              >
                Delete
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
