import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const [hide, sethide] = useState(false);
  function onClick() {
    sethide(true);
  }

  function onBlur() {
    sethide(false);
  }

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
      <form onFocus={onClick} onBlur={onBlur} className="create-note">
        {hide && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={data.title}
            required
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={hide ? 3 : 1}
          value={data.content}
          required
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
