import React, { useState } from "react";
import "../css/edittable-list.css";

const EditableList = () => {
  const [inputList, setInputList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  // handle input change
  const handleInputChange = (e) => {
    const inputItem = e.target.value;
    setInputItem(inputItem);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, inputItem]);
    setInputItem("");
  };

  const handleEditClick = (index) => {
    const item = inputList[index];
    setInputItem(item);
  };
  return (
    <div className="App">
      <ol>
        {inputList.map((x, i) => {
          return (
            <li>
              <div className="">
                <div>{x}</div>
                <div className="">
                  {
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  }
                </div>
                <div>
                  {<button onClick={() => handleEditClick(i)}>Edit</button>}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <textarea
        value={inputItem}
        placeholder="Write~ here..."
        onChange={(e) => handleInputChange(e)}
        rows="5"
        cols="70"
      />
      {<button onClick={handleAddClick}>Add</button>}
    </div>
  );
};

export default EditableList;
