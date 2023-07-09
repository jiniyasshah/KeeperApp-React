import React, { useState, useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import DeleteIcon from "@mui/icons-material/Delete";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const [hide, sethide] = useState(false);
  function onClick() {
    sethide(true);
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      let eventComing = e.target;

      if (!menuRef.current.contains(eventComing)) {
        sethide(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addList(data);
    setData({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form onFocus={onClick} className="create-note" ref={menuRef}>
        {hide && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={data.title}
            required
            autocomplete="off"
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={hide ? 3 : 1}
          value={data.content}
          required
          autoComplete="off"
        />
        {(data.content.length && data.title.length) !== 0 ? (
          <Zoom in={true}>
            <Fab color="primary" aria-label="add" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
