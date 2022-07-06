import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title : String,
    data : String,
}, {
    timestamps : true
});

export default mongoose.models.note || mongoose.model('note', noteSchema);