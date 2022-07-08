import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

function NoteCard({id, title, data}){

    const router = useRouter();

    const [newTitle, setNewTitle] = useState(title);
    const [newText, setNewText] = useState(data);



    function deletePost(){
        axios.delete('/api/delete-post', {
            headers : {},
            data : {
                id
            }
        })
    };

    function updatePost(){

        let postTitle = newTitle;
        let postText = newText;
        axios.put('/api/update-post', {
                id,
                title : postTitle,
                data : postText,
            }
        )
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{data}</p>
            <div className="options">
                <button onClick={deletePost}>Delete Post</button>
                <Popup trigger={<button>Update Post</button>} position="right">
                    <input onChange={(event) => setNewTitle(event.target.value)} type="text" value={newTitle} placeholder="post title" />
                    <input onChange={(event) => setNewText(event.target.value)} type="text" placeholder="note text" value={newText} />
                    <button onClick={updatePost}>Update Note</button>
                </Popup>
            </div>
        </div>
    )
};

export default NoteCard;