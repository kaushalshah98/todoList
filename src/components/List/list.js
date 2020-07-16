import React, { Fragment } from "react";
import "./list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItems(props) {
  const { list, deleteItem, updateItem } = props;
  const listItems = list.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            value={item.value}
            onChange={(e) => updateItem(e.target.value, item.key)}
          ></input>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => deleteItem(item.key)}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });
  return <Fragment>{listItems}</Fragment>;
}

export default ListItems;
