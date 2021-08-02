import React, { useState } from "react";
import "../css/editable-table.css";

const EditableTable = () => {
  const [inputList, setInputList] = useState([]);

  const [inputItem, setItem] = useState({ ingredients: "", quantity: "" });

  const isEmpty = (string) => string.trim() === "" || !string.trim();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const item = { ...inputItem };
    item[name] = value;
    setItem(item);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    if (!isEmpty(inputItem.ingredients) && !isEmpty(inputItem.quantity)) {
      setInputList([...inputList, inputItem]);
    }
  };

  return (
    <div className="App">
      <div className="table-title">
        <div className="table-items">ingredients</div>
        <div className="table-items">quantity</div>
      </div>
      {inputList.map((x, i) => {
        return (
          <div className="table-title">
            <div className="table-items">{x.ingredients}</div>
            <div className="table-items">{x.quantity}</div>
            <div className="btn-box">
              <button
                className="remove-button"
                onClick={() => handleRemoveClick(i)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="box">
        <input
          name="ingredients"
          placeholder="ingredients"
          value={inputItem.ingredients}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          className="ml10"
          name="quantity"
          placeholder="Enter quantity"
          value={inputItem.quantity}
          onChange={(e) => handleInputChange(e)}
        />
        <div>
          <button onClick={handleAddClick}>Add</button>
        </div>
      </div>
    </div>
  );
};
export default EditableTable;
