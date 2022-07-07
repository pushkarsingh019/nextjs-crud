import NOTE from "../../models/postModel";
import ConnectDB from "../../config/database";

ConnectDB()

async function createNote(req, res) {
    try {
        const {title, data} = req.body;
        const newNote = await NOTE.create({
            title,
            data
        });
        console.log("note added");
        res.status(201).json({ success: true, data: newNote });
    } catch (error) {
        console.log("not addition failed");
        res.status(500).json({success : false, data : error.message})
    }
}

export default createNote