import Post from "../../models/postModel";
import ConnectDB from "../../config/database";

ConnectDB();

async function getPosts(req, res){
    try {
        const data = await Post.find({});
        res.status(201).json({status : "success", data : data});
    } catch (error) {   
        res.status(500).json({status : "failure", data : error.message});
    }
};

export default getPosts;