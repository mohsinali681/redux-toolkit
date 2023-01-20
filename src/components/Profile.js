import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../action.js";
import axios from "axios";
function Profile() {
  const { name, age, status } = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateAge = (age) => {
    dispatch({ type: "UPDATE_AGE", payload: age });
  };
  const updateName = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = result.data;
    console.log(data[0].name);
    dispatch({ type: "UPDATE_NAME", payload: data[0].name });
  };
  const changeStatus = (status) => {
    dispatch(updateStatus(status));
  };
  return (
    <div>
      <h2>
        i am {name} my age is {age} my and i am {status}
      </h2>
      <button
        onClick={() => {
          updateAge(40);
        }}
      >
        change age
      </button>
      <button
        onClick={() => {
          updateName();
        }}
      >
        change name
      </button>
      <button
        onClick={() => {
          changeStatus("programmer");
        }}
      >
        change status
      </button>
    </div>
  );
}

export default Profile;
