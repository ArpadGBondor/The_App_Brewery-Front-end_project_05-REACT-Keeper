import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';

import notes from '../notes.js';

function App() {
  const [noteArray, setNoteArray] = useState(() => notes.load());

  function handleSubmit(content) {
    setNoteArray((prev) => {
      const newNoteArray = [...prev, content];
      notes.save(newNoteArray);
      return newNoteArray;
    });
  }

  function handleDelete(delIndex) {
    setNoteArray((prev) => {
      const newNoteArray = prev.filter((item, idx) => idx !== delIndex);
      notes.save(newNoteArray);
      return newNoteArray;
    });
  }

  return (
    <div className="app">
      <Header />
      <CreateArea onSubmit={handleSubmit} />
      <div className="notes">
        {noteArray.map((note, idx) => (
          <Note key={idx} title={note.title} content={note.content} delete={() => handleDelete(idx)} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
