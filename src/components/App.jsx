import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addList(newNote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addList={addList} />
      {notes.map((data, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
            delItem={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
