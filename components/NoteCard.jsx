import axios from "axios";
import { useEffect, useState } from "react";

function NoteCard({id, title, data}){

    function deletePost(){
        axios.delete('/api/delete-post', {
            headers : {},
            data : {
                id
            }
        })
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{data}</p>
            <div className="options">
                <button onClick={deletePost}>Delete Post</button>
            </div>
        </div>
    )
};

export default NoteCard;