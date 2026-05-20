import useNoteStore
from "../store/noteStore";

const NotesList = () => {

  const notes =
    useNoteStore(
      s => s.notes
    );

  const addNote =
    useNoteStore(
      s => s.addNote
    );

  return (

    <div>

      <h2>
        Notes
      </h2>

      <button

        onClick={() =>

          addNote({

            id:
              crypto.randomUUID(),

            text:
              "New Note"
          })
        }
      >

        Add Note

      </button>

      <ul>

        {notes.map(note => (

          <li key={note.id}>

            {note.text}

          </li>
        ))}

      </ul>

    </div>
  );
};

export default NotesList;