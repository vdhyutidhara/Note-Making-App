import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NoteCard from "./NoteCard";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://material-ui-tut.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("https://material-ui-tut.herokuapp.com/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const handleEdit = async (id) => {
    const newNote = prompt("Edit your Notes");

    const editNote = notes.map((note) => {
      if (note.id == id) {
        note.details = newNote;
      }
      return note;
    });
    setNotes(editNote);

    await fetch("https://material-ui-tut.herokuapp.com/notes/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ details: newNote }),
    });
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCard
              note={note}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
