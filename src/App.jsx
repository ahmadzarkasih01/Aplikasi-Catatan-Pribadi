import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListNotes from './pages/HomePage';

function App() {
  return (
    <>
      <header>
        <h1>Aplikasi Catatan</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListNotes />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
