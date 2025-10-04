import React, { useState } from "react";

const NoteCard = ({ note, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    updateNote({ ...note, title, content });
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          <button onClick={handleUpdate}>Salvar</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{note.date}</small>
          <div className="note-actions">
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => deleteNote(note.id)}>Excluir</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
