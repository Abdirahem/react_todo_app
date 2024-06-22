import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Hem is reading", "cooking food"]);
  // Array of booleans to track checked state for each task
  const [checkedTasks, setCheckedTasks] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleCheckboxChange = (index, e) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[index] = e.target.checked;
    setCheckedTasks(newCheckedTasks);
  };

  const addToTask = (e) => {
    const taskValue = e.target.value;
    setTasks([...tasks, taskValue]);
    setCheckedTasks([...checkedTasks, false]); // Add false for new task's checked state
  };

  const handleDeleteTask = (index) => {
    // Create a new array without the deleted task
    const newTasks = [...tasks]
      .slice(0, index)
      .concat([...tasks].slice(index + 1));
    // Update tasks and checkedTasks arrays
    setTasks(newTasks);
    setCheckedTasks(newTasks.map(() => false)); // Reset checked states for remaining tasks
  };

  return (
    <div className="container w-5/6 md:w-3/6 mt-12 m-auto bg-white p-8 rounded-md ">
      {/* Input Task and add button */}
      <div className="form-group flex gap-x-2">
        <input
          type="text"
          placeholder="Task title.."
          name="username"
          id="username"
          className="w-full rounded-md border-2 p-2 border-indigo-950"
          autoComplete="off"
          // onChange={addToTask}
        />
        <button
          onClick={addToTask}
          className="bg-indigo-950 text-white w-12 rounded-md border p-2 font-bold"
        >
          <i className="fa-solid text-2xl bg-indigo-950 fa-square-plus"></i>
        </button>
      </div>

      {/* Display List */}
      <ul className="list mt-5 ">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex bg-slate-100 gap-x-2 mt-2 p-2 items-center"
          >
            <input
              type="checkbox"
              className=" border-none focus:ring-indigo-500 focus:ring-2"
              checked={checkedTasks[index]} // Use checkedTasks for individual checkbox state
              onChange={(e) => handleCheckboxChange(index, e)}
            />
            <span
              className={`w-5/6 ${
                checkedTasks[index] ? "line-through text-green-600" : ""
              }`}
            >
              {task}
            </span>
            <div className="modifiers flex gap-x-5 justify-end w-1/6">
              {/* Edit Button (implementation needed based on your requirements) */}
              <button className="text-indigo-950 ">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              {/* Delete Button */}
              <button
                className="text-indigo-950"
                onClick={() => handleDeleteTask(index)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
