import React, { useState } from "react";
import "../css/edittable-list.css";

const EditableList = () => {
  const [inputList, setInputList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [editItem, setEditItem] = useState([]);
  // handle input change
  const handleInputChange = (e) => {
    const inputItem = e.target.value;
    setInputItem(inputItem);
  };

  const handleEditChange = (e, index) => {
    const edit = [...editItem];
    edit[index][0] = e.target.value;
    setEditItem(edit);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    const edit = [...editItem];
    edit.splice(index, 1);
    list.splice(index, 1);
    setInputList(list);
    setEditItem(edit);
  };

  // handle click event of the Add button
  // TODO  Check if text area is empty
  const handleAddClick = () => {
    setInputList([...inputList, inputItem]);
    setEditItem([...editItem, [inputItem, false]]);
    setInputItem("");
  };

  const handleSaveClick = (index) => {
    const edit = [...editItem];
    const list = [...inputList];
    edit[index][1] = false;
    list[index] = edit[index][0];
    setInputList(list);
    setEditItem(edit);
  };

  const handleDiscardClick = (index) => {
    const edit = [...editItem];
    const list = inputList[index];
    edit[index][1] = false;
    edit[index][0] = list;
    setEditItem(edit);
  };

  const handleEditClick = (index) => {
    const item = [...editItem];
    item[index][1] = true;
    setEditItem(item);
  };
  return (
    <div className="App">
      <ol>
        {inputList.map((x, i) => {
          return (
            <li>
              <div className="">
                {editItem[i][1] ? (
                  <textarea
                    value={editItem[i][0]}
                    onChange={(e) => handleEditChange(e, i)}
                  />
                ) : (
                  <div className="test">{x}</div>
                )}
                {editItem[i][1] ? (
                  <div>
                    <button className="" onClick={() => handleSaveClick(i)}>
                      save
                    </button>
                    <button className="" onClick={() => handleDiscardClick(i)}>
                      discard
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="" onClick={() => handleRemoveClick(i)}>
                      Remove
                    </button>
                    <button className="" onClick={() => handleEditClick(i)}>
                      Edit
                    </button>
                  </div>
                )}
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
