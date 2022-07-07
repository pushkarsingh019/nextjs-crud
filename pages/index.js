import NewNote from "../components/NewNote";
import axios from "axios";
import { useEffect, useState } from "react";

// export async function getStaticProps(){
//   try {
//     const response = await axios.get('/api/get-posts');
//     const {status, data} = response;
//     console.log("Data fetched from the backend");
//     return {
//       props : {
//         data,
//       }
//     }
//   } catch (error) {
//     console.log(`could not fetch data -> ${error.message}`);
//     let data = error.message;
//     return {
//       props : {
//         data
//       }
//     }
//   }
// }

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
          <div>
            <h3>{note.title}</h3>
            <p>{note.data}</p>  
          </div>
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