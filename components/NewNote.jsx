import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/router";

function NewNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function createNote(event) {
    event.preventDefault();
    let noteData = {
        title : title,
        data : note
    }
    axios.post('/api/create-note', noteData);
    router.push('/');
  }

  return (
      <form onSubmit={createNote}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <textarea
          type="text"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Start typing your note"
        />
        <br />
        <button type="submit">Create Note</button>
      </form>
  );
}

export default NewNote;
