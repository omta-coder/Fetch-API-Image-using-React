import React, { useContext, useRef, useState } from "react";
import { dummycontext, todocontext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const [users, setusers] = useContext(todocontext)
  const info = useContext(dummycontext);
  console.log(info);

  const [username, setusername] = useState("");
  const [gender, setgender] = useState("");
  const [city, setcity] = useState("");
  const [message, setmessage] = useState("");
  const [error, seterror] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = { username, gender, city, message };

    setusers([...users, newData]);

    navigate("/show")

    setusername("");
    setgender("");
    setcity("");
    setmessage("");
   
  };

  const onchangeinput = (e)=>{
    if(inputRef.current.value.length > 3){
      seterror(false)
    }else{
      seterror(true)
    }
    console.log(inputRef.current.value);
    setusername(e.target.value)
  }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="bg-slate-200 rounded p-4 w-1/3 mx-auto mt-5"
      >
        <h1 className="mt-5 text-3xl mb-5">React Form</h1>
        <input
          className="block outline-none p-2 w-full mb-3 rounded"
          ref={inputRef}
          type="text"
          name="username"
          value={username}
          placeholder="Enter your name"
          onChange={onchangeinput}
          required
        />
        {error && (
          <small className="text-red-400">Invalid input data</small>
        )}
        <label className=" outline-none block mb-3">
          <input
            type="radio"
            defaultValue="male"
            onChange={(e) => setgender(e.target.value)}
            checked={gender == "male" ? true : false}
          />
          male &nbsp;
          <input
            type="radio"
            defaultValue="female"
            onChange={(e) => setgender(e.target.value)}
            checked={gender == "female" ? true : false}
          />
          female
        </label>
        <select
          value={city}
          onChange={(e) => setcity(e.target.value)}
          className="block outline-none w-full rounded p-1 mb-3"
        >
          <option value="">Select City</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="jabalpur">Jabalpur</option>
        </select>
        <textarea
          className="block mb-3 p-2 outline-none w-full rounded"
          name="message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          placeholder="Enter Message"
        ></textarea>
        <button className="bg-black text-white p-2 rounded px-4">Submit</button>
      </form>
    </div>
  );
};

export default Create;
