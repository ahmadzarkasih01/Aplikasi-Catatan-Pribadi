import React from "react";
import { getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

function HomePage() {

  const notes = getAllNotes();
  return (
    <div className="list-container">
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} />
    </div>
  );
}

export default HomePage;