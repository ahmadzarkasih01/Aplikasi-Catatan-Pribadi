import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

function ArchivesPage() {
  const notes = getArchivedNotes();

  return (
    <div className="list-container">
      <h2>Catatan Arsip</h2>
      {notes.length === 0 ? (
        <section className="notes-list-empty">
          <p className="notes-list__empty">Tidak ada catatan</p>
        </section>
      ) : (
        <NoteList notes={notes} />
      )}
    </div>
  );
}

export default ArchivesPage;
