import React, { useState } from "react";
import "../css/edittable-list.css";

const EditableList = () => {
  const [inputList, setInputList] = useState([""]);
  // handle input change
  const handleInputChange = (e, index) => {
    const list = [...inputList];
    list[index] = e.target.value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, ""]);
  };
  return (
    <div className="App">
      <ol>
        {inputList.map((x, i) => {
          return (
            <li>
              <div className="box">
                <textarea
                  placeholder="Write~ here..."
                  value={x}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EditableList;
