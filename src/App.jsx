import React from "react";
import { Routes, Route } from "react-router-dom";
import ListNotes from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">📝Aplikasi Catatan</a>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/archives">Arsip</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes className="app-container">
          <Route path="/" element={<ListNotes />} />
          <Route path="/archives" element={<ArchivesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
