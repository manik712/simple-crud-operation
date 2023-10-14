import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderData = useLoaderData();
  const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        console.log(email, name);
  
  };

  return (
    <div>
      <h3>Update information of {loaderData.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loaderData?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderData?.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
