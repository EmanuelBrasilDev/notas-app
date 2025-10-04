import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !content) return;

    const newNote = {
      id: uuidv4(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    addNote(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Digite sua nota..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Adicionar Nota</button>
    </form>
  );
};

export default NoteForm;
