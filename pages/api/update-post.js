import Post from "../../models/postModel";

async function updatePost(req, res){
   const {id, title, data} = req.body;
    try {
        await Post.updateMany({_id : id}, {
            title : title,
            data : data
        });

        res.status(200).json({message : "post updated succesfully"})

    } catch (error) {
        res.status(500).json({message : ` ${error.message}`});
    }
}

export default updatePost;