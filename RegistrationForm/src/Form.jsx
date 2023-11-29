import React, { useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.prevantDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800">
            Hello {inputData.name} ,You've Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800"
      >
        <h1 className=" text-center text-white my-3 ">Registration Form</h1>
        <div className=" shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={inputData.name}
            className=" outline-none w-full py-1 px-3"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleData}
          />
        </div>
        <div className=" shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={inputData.email}
            className=" outline-none w-full py-1 px-3"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleData}
          />
        </div>
        <div className=" shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={inputData.password}
            className=" outline-none w-full py-1 px-3"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleData}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-center text-white rounded-md px-3 py-0.5">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
