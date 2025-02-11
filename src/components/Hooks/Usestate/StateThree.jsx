import React, { useState } from "react";

const StateThree = () => {
  const [students, setStudents] = useState(["Gabriel", " Gabriella", "Mr GUO"]);
  console.log(...students);
  const [inputValue, setInputValue] = useState("");
  //   Remove students
  const removeOne = (name) => {
    console.log("clicked");
    setStudents(students.filter((st) => st !== name));
  };

  //Adding a new student
  const addOne = () => {
    if (inputValue && !students.includes(inputValue)) {
      setStudents([...students, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="!ml-14">
      <h1>Students list</h1>
      <ul>
        {students.map((student, index) => (
          <div key={index} className="flex gap-5">
            <li className="!mb-4">{student}</li>
            <button
              className="bg-green-600 text-white"
              onClick={() => removeOne(student)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
      {/* Input field */}

      <input
        type="text"
        placeholder="Add new student"
        className="border"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-pink-500" onClick={addOne}>
        Add Student
      </button>
    </div>
  );
};

export default StateThree;
