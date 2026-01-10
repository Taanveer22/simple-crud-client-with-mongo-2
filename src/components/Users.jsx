import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex justify-center items-center">
      <div>
        <Link to="/" className="text-xl font-bold bg-blue-500">
          Go To Home Page
        </Link>
        <h1 className="my-5">Student Available : {data.length}</h1>
        <div className="">
          {data.map((item) => (
            <p key={item._id} className="bg-yellow-500 my-5">
              {item.name} : {item.email} : {item._id}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
