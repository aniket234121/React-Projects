import React from "react";
import TreeList from "./TreeList";
import { useState } from "react";
const ListItem = ({ val }) => {
  const [displayCurrChild, setDisplayCurrChild] = useState({});

  function toggleChildrens(getCurrentLabel) {
    setDisplayCurrChild({
      ...displayCurrChild,
      [getCurrentLabel]: !displayCurrChild[getCurrentLabel],
    });
  }
  return (
    <>
      <li className="flex gap-1">
        <p>{val.label}</p>
        {val.children && (
          <button onClick={() => toggleChildrens(val.label)}>{displayCurrChild[val.label]?'+':'-'}</button>
        )}
      </li>
      {val.children && !displayCurrChild[val.label] ? (
        <TreeList TreeData={val.children} />
      ) : null}
    </>
  );
};

export default ListItem;
