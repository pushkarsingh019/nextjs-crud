import Post from "../../models/postModel";

async function deletePost(req, res){
    const {id} = req.body;

    try {
        await Post.deleteOne({_id : id});
        res.status(200).json({status : "deleted"})
    } catch (error) {
        res.status(500).json({status : "error"})
    }

}

export default deletePost;