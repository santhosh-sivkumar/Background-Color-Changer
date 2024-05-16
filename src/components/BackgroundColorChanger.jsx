// BackgroundChanger.js
import React, { useState } from "react";

const BackgroundColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-200");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      className={`min-h-screen ${backgroundColor} flex justify-center items-center`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-6">Background Color Changer</h1>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeBackgroundColor("bg-blue-200")}
          >
            Blue
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeBackgroundColor("bg-red-200")}
          >
            Red
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeBackgroundColor("bg-green-200")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeBackgroundColor("bg-yellow-200")}
          >
            Yellow
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeBackgroundColor("bg-purple-200")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundColorChanger;
