import React, { useState } from "react";
import "../css/editable-table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

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
      setItem({ ingredients: "", quantity: "" });
    }
  };

  return (
    <div>
      <div className="editable-table-ingredient-row">
        <div className="test1">
          <div className="editable-table-ingredient-col">ingredients</div>
          <div className="editable-table-ingredient-col">quantity</div>
        </div>
      </div>
      {inputList.map((x, i) => {
        return (
          <div className="editable-table-ingredient-row">
            <div className="editable-table-ingredient-col">{x.ingredients}</div>
            <div className="editable-table-ingredient-col">{x.quantity}</div>
            <div>
              <FontAwesomeIcon
                className="remove-add-button color-red-remove"
                icon={faMinusCircle}
                onClick={() => handleRemoveClick(i)}
              />
            </div>
          </div>
        );
      })}
      <div className="editable-table-ingredient-row">
        <input
          className="editable-table-ingredient-col"
          name="ingredients"
          placeholder="ingredients"
          value={inputItem.ingredients}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          className="editable-table-ingredient-col"
          name="quantity"
          placeholder="quantity"
          value={inputItem.quantity}
          onChange={(e) => handleInputChange(e)}
        />
        <div className="test">
          <FontAwesomeIcon
            className="remove-add-button color-green-add"
            icon={faPlusCircle}
            onClick={handleAddClick}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};
export default EditableTable;
