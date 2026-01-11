import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const info = { name, email };
    console.log(info);

    // send data to server side
    fetch(`http://localhost:5000/users/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("student data updated");
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-semibold">Update data of {data.name}</h1>
        <form onSubmit={handleUpdate} className="my-5">
          <input
            defaultValue={data?.name}
            type="text"
            name="name"
            className="border-2 border-green-500"
            placeholder="name"
          />
          <br /> <br />
          <input
            defaultValue={data?.email}
            type="email"
            name="email"
            className="border-2 border-green-500"
            placeholder="email"
          />
          <br /> <br />
          <input
            type="submit"
            value="Update Student"
            className="bg-orange-500 rounded-full p-1"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
