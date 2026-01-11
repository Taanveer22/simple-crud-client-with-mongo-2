import { Link } from "react-router-dom";

const Root = () => {
  const handleAddStudent = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const info = {
      name,
      email,
    };
    // console.log(info);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert("users added successfully");
          // form reset after successfully added
          e.target.reset();
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Link to="/users" className="text-xl font-bold bg-blue-500">
          Go To Users Page
        </Link>
        <form onSubmit={handleAddStudent} className="my-5">
          <input
            type="text"
            name="name"
            className="border-2 border-green-500"
            placeholder="name"
          />
          <br /> <br />
          <input
            type="text"
            name="email"
            className="border-2 border-green-500"
            placeholder="email"
          />
          <br /> <br />
          <input
            type="submit"
            value="Add Student"
            className="bg-red-500 rounded-full p-1"
          />
        </form>
      </div>
    </div>
  );
};

export default Root;
