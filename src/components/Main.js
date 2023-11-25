import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill, BsCheck, BsCheckAll } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { addToDo, deleteToDo, removeToDo, toggleToDo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Main.css";

function Main() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  const newList = [].concat(list).reverse();
  const [inputData, setInputData] = useState("");
  const handleEnter = (e) => {
    if (e.key === "Enter" && inputData !== "") {
      e.preventDefault();
      dispatch(addToDo(inputData));
      setInputData("");
    }
  };
  return (
    <div className="bg-[#0a0c1e] text-white h-screen flex flex-col justify-center items-center px-3">
      <div className="flex justify-center items-center gap-2 font-bold text-2xl mb-2">
        <div>
          <GoChecklist />
        </div>
        <h1>Todo List</h1>
      </div>
      <div className="border border-[#1d2482f5] bg-[#040723] p-3 rounded-xl flex flex-col justify-center items-center space-y-6 h-[80vh] w-full sm:w-80">
        <p className="text-[#fff]">Add Your List Here✌️</p>
        <div className="flex bg-[#f5f5f5] justify-between items-center rounded-lg w-full sm:w-72 h-11">
          <input
            type="text"
            placeholder="✍️ Write here"
            className="ml-1 p-2 w-full sm:w-60 outline-none bg-transparent text-gray-700 rounded-lg"
            value={inputData}
            onChange={(event) => {
              setInputData(event.target.value);
            }}
            onKeyDown={(e) => handleEnter(e)}
          />
          <div
            className={`text-gray-600 flex h-10 w-10 hover:bg-gray-300 transition-all duration-200 justify-center items-center hover:text-green-600 cursor-pointer ${
              inputData === "" ? "hidden" : ""
            } rounded-lg text-xl mr-1`}
            onClick={() => {
              dispatch(addToDo(inputData));
              setInputData("");
            }}
          >
            <AiOutlinePlus />
          </div>
        </div>

        <div className="flex flex-col space-y-2 overflow-y-auto h-72 w-full sm:w-72 bg-[#03061ff5] p-1 rounded-lg border border-[#141a5cf5]">
          {newList.length > 0 ? (
            newList.map((item) => {
              return (
                <div
                  className={`flex justify-between ${
                    item.isDone ? "bg-green-500" : "bg-blue-500"
                  } text-[#fff] rounded-lg items-center hover:bg-[#f5f5f5] hover:text-gray-700 transition-all duration-100`}
                  key={item.id}
                >
                  <h2 className="px-3 w-ful">{item.data}</h2>
                  <div className="flex">
                    <div
                      className=" flex h-10 w-10  justify-center items-center hover:text-blue-600 cursor-pointer rounded-lg text-2xl "
                      onClick={() => {
                        dispatch(toggleToDo(item.id));
                      }}
                    >
                      {item.isDone ? <BsCheckAll /> : <BsCheck />}
                    </div>
                    <div
                      className="flex h-10 w-10 justify-center items-center hover:text-red-600 cursor-pointer rounded-lg text-xl mr-1"
                      onClick={() => {
                        dispatch(deleteToDo(item.id));
                      }}
                    >
                      <BsFillTrashFill />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="h-full w-full text-[#1d2482f5] flex justify-center items-center">
              no todos...
            </div>
          )}
        </div>
        <div
          onClick={() => {
            dispatch(removeToDo());
          }}
          className="bg-[#f5f5f5] text-gray-700 py-2 px-3 rounded-md hover:text-red-500 cursor-pointer transition-all duration-200 hover:px-4 "
        >
          <span>Remove All</span>
        </div>
      </div>
      <div className="flex justify-center text-[#353daef5] items-center gap-2 font-semibold text-sm mt-3">
        Developed by Ayaz
      </div>
    </div>
  );
}

export default Main;
