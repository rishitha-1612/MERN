import "./App.css";

import NotesList
from "./components/NotesList";

import PreferencesPanel
from "./components/PreferencesPanel";

import SessionPanel
from "./components/SessionPanel";

import CollaboratorsList
from "./components/CollaboratorsList";

function App() {

  return (

    <div className="container">

      <h1>
        CollabNotes
      </h1>

      <PreferencesPanel />

      <SessionPanel />

      <NotesList />

      <CollaboratorsList />

    </div>
  );
}

export default App;