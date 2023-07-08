import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  function onClick() {
    props.delItem(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title ? props.title : "Empty"}</h1>
      <p>{props.content ? props.content : "Empty"}</p>
      <button onClick={onClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
