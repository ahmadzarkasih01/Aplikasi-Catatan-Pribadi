import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
 return (
   <section>
    {
      notes.map((note) => (
        <NoteItem key={note.id} {...note}/>
      ))
    }
   </section>
 );
}

export default NoteList;