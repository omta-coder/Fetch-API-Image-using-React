import React, { useContext } from "react";
import { todocontext } from "../context/TodoContext";
import { Link, Outlet } from "react-router-dom";

const Show = () => {
  const [users, setusers] = useContext(todocontext);

  const DeleteHandler = (index) => {
    const copyusers = [...users];
    copyusers.splice(index, 1);
    setusers(copyusers);
  };
  return (
    <>
      <div className="mt-5 w-1/3 mx-auto">
        <ol>
          {users.length > 0
            ? users.map((user, index) => (
                <ul key={index}>
                  <li>
                    <Link to={`/show/${index}`}>{user.username} &nbsp;</Link>
                    <span onClick={() => DeleteHandler(index)}>❌</span>
                  </li>
                </ul>
              ))
            : "No User Found"}
        </ol>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default Show;
