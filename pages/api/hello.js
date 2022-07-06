import connectDB from "../../config/database";

export default function (req, res) {
    connectDB();
    res.send("something?");
}