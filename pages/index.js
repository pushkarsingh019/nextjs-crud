import NewNote from "../components/NewNote";
import axios from "axios";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { useRouter } from "next/router";

function GetNotes(){


  const [notes, setNotes] = useState([]);
  const [isLoading, setLoading]  = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/get-posts')
    .then((res) => res.json())
    .then((note) => {
      setNotes(note)
      setLoading(false);
    })
  }, []);

  if(isLoading) return <p>Loading...</p>
  if(notes.length === 0) return <p>No Notes Found</p>
  const {data} = notes;

  return (
    <div>
      {data.map((note) => {
        return (
          <NoteCard key={note._id} title={note.title} data={note.data} id={note._id} />
        )
      })}
    </div>
  )
}


function Home(){
  

  return(
    <>
      <NewNote />
      <GetNotes />
    </>
  )
};

export default Home;