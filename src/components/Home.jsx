import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setusers] = useState([]);
  const getUser = async () => {
    try {
      const response = await axios.get();
      console.log(response.data);
      setusers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className=" w-1/3 mx-auto">
      <h1 className="text-3xl mb-3">Home Page</h1>
      <hr />
      {users.map((user) => (
        <li className="mb-3 p-3 bg-red-300 w-auto flex items-center justify-between mt-2" key={user.id}>
          
          {user.id}.
          &nbsp;
          {user.author}
          &nbsp;
          <img className="w-[10rem]" src={user.download_url} alt={user.id} />
          
        </li>
      ))}
    </div>
  );
};

export default Home;
