import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Carregar notas do localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Atualizar localStorage sempre que notas mudarem
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([note, ...notes]);

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  const updateNote = (updatedNote) =>
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));

  return (
    <div className="app">
      <Header />
      <NoteForm addNote={addNote} />
      <div className="notes-container">
        {notes.length === 0 ? (
          <p className="no-notes">Nenhuma nota ainda...</p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
