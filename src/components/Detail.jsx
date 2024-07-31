import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { todocontext } from "../context/TodoContext";

const Detail = () => {
  const location = useLocation();
  console.log(location);
  const [users, setusers] = useContext(todocontext);
  const { id } = useParams();
  const user = users[id];
  return (
    <div className="w-[80%] m-auto mt-10 p-10 bg-slate-400">
      <h1 className="text-5xl">{id}</h1>
      <h2>{user.username}</h2>
      <h2>{user.gender}</h2>
      <h2>{user.city}</h2>
      <h2>{user.message}</h2>
      <Link className="text-blue-600" to="/show">Go Back</Link>
    </div>
  );
};

export default Detail;
