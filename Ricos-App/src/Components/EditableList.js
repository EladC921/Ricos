import React, { useState } from "react";
import "../css/edittable-list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const EditableList = () => {
  const [inputList, setInputList] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [editItem, setEditItem] = useState([]);

  // returns if the the textarea is empty or not
  const isEmpty = (string) => string.trim() === "" || !string.trim();

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
  const handleAddClick = () => {
    if (!isEmpty(inputItem)) {
      setInputList([...inputList, inputItem]);
      setEditItem([...editItem, [inputItem, false]]);
      setInputItem("");
    }
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
    <div>
      <ol>
        {inputList.map((x, i) => {
          return (
            <li>
              <div className="editable-list-input-container">
                {editItem[i][1] ? (
                  <textarea
                    className="editable-list-textarea"
                    value={editItem[i][0]}
                    onChange={(e) => handleEditChange(e, i)}
                    rows="7"
                  />
                ) : (
                  <div className="editable-list-div">{x}</div>
                )}
                {editItem[i][1] ? (
                  <div className="editable-list-div-width">
                    <FontAwesomeIcon
                      className="edit-list-save-button"
                      icon={faCheck}
                      onClick={() => handleSaveClick(i)}
                      size="lg"
                    />
                    <FontAwesomeIcon
                      className="editable-list-discard-button"
                      icon={faTimesCircle}
                      onClick={() => handleDiscardClick(i)}
                      size="lg"
                    />
                  </div>
                ) : (
                  <div className="editable-list-div-width">
                    <FontAwesomeIcon
                      className=""
                      icon={faEdit}
                      onClick={() => handleEditClick(i)}
                      size="lg"
                    />
                    <FontAwesomeIcon
                      className="editable-list-remove-button"
                      icon={faMinusCircle}
                      onClick={() => handleRemoveClick(i)}
                      size="lg"
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="editable-list-input-container">
        <textarea
          className="editable-list-textarea"
          value={inputItem}
          placeholder="Write~ here..."
          onChange={(e) => handleInputChange(e)}
          rows="7"
        />
        <div>
          <FontAwesomeIcon
            className="editable-list-add-button"
            icon={faPlusCircle}
            onClick={handleAddClick}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EditableList;
